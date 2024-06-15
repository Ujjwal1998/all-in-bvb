const axios = require("axios");

const populateBVBSquad = async () => {
  try {
    const response = await axios.get(
      "https://v3.football.api-sports.io/players/squads?team=165",
      {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "6ec8aa28f3356b25368f06f62d469ec0",
        },
      }
    );
    // console.log(response);
    players = response.data.response[0].players;
    players.forEach((player) => {
      axios.post(`http://localhost:3000/api/players/${player.id}`, player);
    });
  } catch (error) {
    console.log("error in populate squad", error);
  }
};

populateBVBSquad();
