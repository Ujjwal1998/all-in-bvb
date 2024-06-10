const mongoose = require("mongoose");
const { Schema } = mongoose;

const fixtureSchema = new Schema({
  fixture: {},
  events: {},
  statistics: {},
  lineups: {},
  score: {},
  players: {},
  teams: {},
  goals: {},
  league: {},
});

fixtureSchema.pre("save", function (next) {
  this.fixture.date = this.fixture.date.split("T")[0];
  next();
});
const Fixture = mongoose.model("Fixture", fixtureSchema);
module.exports = Fixture;
