const express = require("express");
const Player = require("../db/playerSchema");
const router = express.Router();

// expectation is that player is created, if fixture is there vote is incremented and if fixture is not there vote is set to 1
router.post("/vote", async (req, res) => {
  try {
    const playerID = parseInt(req.body.player.id);
    const fixtureID = parseInt(req.body.fixture.id);
    const updatedPlayer = await Player.findOneAndUpdate(
      {
        "player.id": playerID,
        "fixture.id": fixtureID,
      },
      { $inc: { "fixture.$.votes": 1 } },
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
            fixture: {
              id: fixtureID,
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

// check if fixture exists
// increment vote by 1
router.get("/votes/:id", async (req, res) => {
  try {
    const fixtureID = parseInt(req.params.id);
    const response = await Player.find({
      "fixture.id": fixtureID,
    });
    const data = {};
    response.forEach(({ player: { id, name }, fixture }) => {
      const selectedFixture = fixture.filter(
        (fixture) => fixture.id == fixtureID
      );
      data[name] = selectedFixture[0].votes;
    });
    if (Object.keys(data).length > 0) {
      res.status(200).json(data);
    } else {
      res.status(404).json(data);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});
module.exports = router;
