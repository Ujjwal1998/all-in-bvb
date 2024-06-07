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
    console.error("Error in getting getBVBLineup");
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
    // const response = await ApiSportsClient.get(
    //   `/fixtures?league=${apiSportsLeagueID}&team=${apiSportsTeamID}&season=${seasonYear}&date=${fixtureDate}`
    // );
    const response = await ApiSportsClient.get(
      `/fixtures?team=${apiSportsTeamID}&date=${fixtureDate}&season=2023`
    );
    return response.data;
  } catch (err) {
    console.error("Error in getting getBVBFixtureID");
    throw err;
  }
};
