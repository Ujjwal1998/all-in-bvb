const express = require("express");
const Fixture = require("../db/fixtureSchema");
const Player = require("../db/playerSchema");
const router = express.Router();
const axios = require("axios");

require("dotenv").config();

const HEADERS = {
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "6ec8aa28f3356b25368f06f62d469ec0",
  },
};

router.get("/:date", async (req, res) => {
  try {
    console.log("here");
    let fixture = await getFixtureByDate(req.params.date);
    if (!fixture) {
      // create fixture
      const apiSportsFixtureID = await getAPIFootballFixtureID(req.params.date);
      const fixtureDetail = await getAPIFootballFixtureDetail(
        apiSportsFixtureID
      );
      // add players that played the match to the fixture
      const start11 = fixtureDetail.lineups.filter(
        (lineup) => lineup.team.id == process.env.GERMANY_FOOTBALL_API_TEAMID
      )[0]["startXI"];
      const subDetails = fixtureDetail.events.filter(
        (evt) =>
          evt.type == "subst" &&
          evt.team.id == process.env.GERMANY_FOOTBALL_API_TEAMID
      );
      const subs = subDetails.map((sub) => sub.assist);
      console.log(subs);
      // const allPlayers = start11.concat(subs);
      for (const { player } of start11) {
        console.log(player.name);
        await addFixtureToPlayer(fixtureDetail.fixture.id, player.id);
      }
      for (const sub of subs) {
        await addFixtureToPlayer(fixtureDetail.fixture.id, sub.id);
      }
      let newFixture = await Fixture.create(fixtureDetail);
      newFixture = newFixture.toJSON();
      console.log("post 2");
      return res.status(201).json(newFixture);
      // allPlayers.forEach(
      //   async ({ player }) =>
      //     await addFixtureToPlayer(fixtureDetail.fixture.id, player.id)
      // );
      // await axios.post("http://localhost:3000/api/fixtures/", fixtureDetail);
    }
    return res.status(200).json(fixture);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the fixture." });
  }
});

router.post("/", async (req, res) => {
  console.log("inside post");
  try {
    let fixture = await Fixture.create(req.body);
    fixture = fixture.toJSON();
    console.log("post 2");
    res.status(201).json(fixture);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/votes/:id", async (req, res) => {
  try {
    const fixtureID = parseInt(req.params.id);
    return await Fixture.find({ "fixture.id": fixtureID });
  } catch (error) {
    console.log("jdslkfds", error);
  }
});

async function getFixtureByDate(fixtureDate) {
  return await Fixture.findOne({ "fixture.date": fixtureDate });
}
// error will come here once limit is reached
async function getAPIFootballFixtureID(fixtureDate) {
  const response = await axios.get(
    `${process.env.FOOTBALL_API_BASE_URL}/fixtures?team=${process.env.GERMANY_FOOTBALL_API_TEAMID}&date=${fixtureDate}&season=${process.env.SEASON_YEAR}`,
    HEADERS
  );
  return response.data.response[0].fixture.id;
}

async function getAPIFootballFixtureDetail(apiSportsFixtureID) {
  const {
    data: { response },
  } = await axios.get(
    `${process.env.FOOTBALL_API_BASE_URL}/fixtures?id=${apiSportsFixtureID}`,
    HEADERS
  );
  return response[0];
}

// add the fixture vote details to player model
const addFixtureToPlayer = async (fixtureID, playerID) => {
  await Player.findOneAndUpdate(
    {
      "player.id": playerID,
    },
    {
      $push: {
        fixture: {
          id: fixtureID,
          votes: 0,
          isMOTM: false,
        },
      },
    },
    { returnDocument: "after" }
  );
  console.log("pushed", playerID, fixtureID);
};

// add subs to start eleven
const addSubsToEleven = (fixture) => {
  console.log(fixture.lineups);
  const start11 = fixture.lineups.filter(
    (lineup) => lineup.team.id == process.env.GERMANY_FOOTBALL_API_TEAMID
  );
  const subs = fixture.events.filter((evt) => evt.type == "subst");
  return start11.concat(subs);
};

module.exports = router;
