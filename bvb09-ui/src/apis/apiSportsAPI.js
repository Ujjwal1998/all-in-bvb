import axios from "axios";

const BASE_URL = "https://v3.football.api-sports.io";

const ApiSportsClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "6ec8aa28f3356b25368f06f62d469ec0",
  },
});

export const getBVBMatchDetail = async (apiSportsFixtureID) => {
  try {
    const response = await ApiSportsClient.get(
      `/fixtures?id=${apiSportsFixtureID}`
    );
    return response.data;
  } catch (err) {
    console.error("Error in getting getBVBMatchDetail");
    throw err;
  }
};

export const getBVBFixtureID = async (
  //   apiSportsLeagueID,
  apiSportsTeamID,
  //   seasonYear,
  fixtureDate
) => {
  try {
    const response = await ApiSportsClient.get(
      `/fixtures?team=${apiSportsTeamID}&date=${fixtureDate}&season=${SEASON_YEAR}`
    );
    return response.data;
  } catch (err) {
    console.error("Error in getting getBVBFixtureID");
    throw err;
  }
};

export const getBVBSquad = async () => {
  try {
    const response = await ApiSportsClient.get(
      `/players/squads?team=${import.meta.env.VITE_TEAM_ID}`
    );
    return response.data;
  } catch (err) {
    console.error("Error in getting getBVBFixtureID");
    throw err;
  }
};
