const express = require("express");
const Fixture = require("../db/fixtureSchema");
const router = express.Router();

router.get("/:date", async (req, res) => {
  try {
    const fixtureDate = req.params.date;
    const fixture = await Fixture.findOne({ "fixture.date": fixtureDate });

    if (fixture == null) {
      return res.status(404).json({ error: "fixture not found." });
    }
    res.json(fixture);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the fixture." });
  }
});

router.post("/", async (req, res) => {
  try {
    const fixture = await Fixture.create(req.body);
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
module.exports = router;
