const axios = require("axios");
const Player = require("../db/playerSchema");
require("dotenv").config();

const HEADERS = {
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "6ec8aa28f3356b25368f06f62d469ec0",
  },
};

const populateSquad = async () => {
  try {
    const response = await axios.get(
      `https://v3.football.api-sports.io/players/squads?team=25`,
      HEADERS
    );
    console.log(response.data.response);
    const players = response.data.response[0].players;
    players.forEach((player) => {
      axios.post(`${process.env.NODE_HOST}/api/players/${player.id}`, player);
    });
    return;
  } catch (error) {
    console.log("error in populate squad", error);
  }
};

populateSquad();
// export default runAtMatchEnd;
