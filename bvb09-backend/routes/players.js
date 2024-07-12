const express = require("express");
const axios = require("axios");
const Player = require("../db/playerSchema");
const Fixture = require("../db/fixtureSchema");
const router = express.Router();

// expectation is that player is created, if fixture is there vote is incremented and if fixture is not there vote is set to 1
router.post("/vote", async (req, res) => {
  try {
    const playerID = parseInt(req.body.player.id);
    const fixtureID = parseInt(req.body.fixture.id);
    const fixtureDate = req.body.fixture.date;
    const fixtureLeague = req.body.fixture.league;
    const updatedPlayer = await Player.findOneAndUpdate(
      {
        "player.id": playerID,
        "fixtures.id": fixtureID,
      },
      { $inc: { "fixtures.$.votes": 1 } },
      { returnDocument: "after" }
    );
    if (updatedPlayer) {
      return res.status(200).json({ updatedPlayer });
    } else {
      const updatedPlayer2 = await Player.findOneAndUpdate(
        {
          "player.id": playerID,
        },
        {
          $push: {
            fixtures: {
              id: fixtureID,
              date: fixtureDate,
              league: fixtureLeague,
              votes: 1,
              isMOTM: false,
            },
          },
        },
        { returnDocument: "after" }
      );
      return res.status(200).json({ updatedPlayer2 });
    }
  } catch (err) {
    console.log(err, "in catch");
    res.status(400).json({ message: err.message });
  }
});

// create new player
router.post("/:id", async (req, res) => {
  try {
    const playerID = parseInt(req.params.id);
    const player = await Player.findOne({ "player.id": playerID });
    if (!player) {
      const createdPlayer = await Player.create({ player: req.body });
      return createdPlayer;
    }
    return player;
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get player model
// returns the fixtures in a sorted manner based on the time
router.get("/:id/votes", async (req, res) => {
  try {
    const playerID = parseInt(req.params.id);
    let doc = await Player.aggregate([
      { $match: { "player.id": playerID } },
      { $unwind: "$fixtures" },
      { $sort: { "fixtures.date": -1 } },
    ]);
    console.log(doc);
    let playerObj = { id: doc[0].player.name, data: [] };
    for (const d of doc) {
      playerObj.data.push({ x: d.fixtures.league.round, y: d.fixtures.votes });
    }
    res.status(200).json({ data: [playerObj] });
  } catch (error) {
    console.log("error in getting votes", error);
    res.status(500).json({ error });
  }
});
// returns for all players, takes the league as input
router.get("/league/:leagueID/votes", async (req, res) => {
  try {
    const leagueID = parseInt(req.params.leagueID);
    const fixtures = await Fixture.find({ "league.id": leagueID });
    let data = {};
    for ({
      fixture: { id },
    } of fixtures) {
      const players = await Player.find({ "fixtures.id": id });
      for (const { player, fixtures } of players) {
        if (!Object.keys(data).includes(player.name)) {
          data[player.name] = [];
          for (const item of fixtures) {
            data[player.name].push({ x: item.league.round, y: item.votes });
          }
        }
      }
    }
    res.status(200).json(data);
  } catch (error) {
    console.log("error in getting votes", error);
    res.status(500).json({ error });
  }
});
// takes fixture id as input, returs all players and their votes sorted, can help in ranking also in finding the top player
router.get("/fixtures/:fixtureID/votes", async (req, res) => {
  try {
    const fixtureID = parseInt(req.params.fixtureID);
    const agg = [
      {
        $unwind: {
          path: "$fixtures",
        },
      },
      {
        $match: {
          "fixtures.id": fixtureID,
        },
      },
      {
        $sort: {
          "fixtures.votes": 1,
        },
      },
      {
        $set: {
          player_name: {
            $toString: "$player.name",
          },
          votes: {
            $toString: "$fixtures.votes",
          },
          round: {
            $toString: "$fixtures.league.round",
          },
        },
      },
      {
        $project: {
          player_name: 1,
          votes: 1,
          round_number: {
            $substr: ["$round", 6, -1],
          },
        },
      },
    ];
    console.log(agg);
    const fixtureVotes = await Player.aggregate(agg);
    console.log(fixtureVotes);
    // let data = {};
    // for ({
    //   fixture: { id },
    // } of fixtures) {
    //   const players = await Player.find({ "fixtures.id": id });
    //   for (const { player, fixtures } of players) {
    //     if (!Object.keys(data).includes(player.name)) {
    //       data[player.name] = [];
    //       for (const item of fixtures) {
    //         data[player.name].push({ x: item.league.round, y: item.votes });
    //       }
    //     }
    //   }
    // }
    res.status(200).json(fixtureVotes);
  } catch (error) {
    console.log("error in getting votes", error);
    res.status(500).json({ error });
  }
});

// router.get("/votes", async (req, res) => {
//   try {
//     let data = {}
//     const response = await Player.find()
//     response.forEach(({ player: { id, name }, fixture }) => {
//       const selectedFixture = fixture.filter(
//         (fixture) => fixture.id == fixtureID
//       );
//       data[name] = selectedFixture[0].votes;
//     });
//     });
//     if (Object.keys(data).length > 0) {
//       res.status(200).json(data);
//     } else {
//       res.status(404).json(data);
//     }
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });
module.exports = router;
