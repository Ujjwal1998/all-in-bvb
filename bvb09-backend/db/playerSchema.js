const mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema({
  player: {
    id: Number,
    name: String,
    number: Number,
    position: String,
    photo: String,
  },
  fixture: [
    {
      id: Number,
      votes: { type: Number, default: 0 },
      isMOTM: { type: Boolean, default: false },
    },
  ],
});

// playerSchema.pre("save", function (next) {
//   this.player.id = this.fixture.date.split("T")[0];
//   next();
// });
const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
