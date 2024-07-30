import axios from "axios";
import { getMatchDetail, getBVBFixtureID } from "./apiSportsAPI.js";

const getAPIFixtureID = async (teamID, fixtureDate) => {
  const fixtureData = await axios.get(
    `${
      import.meta.env.FOOTBALL_API_BASE_URL
    }/fixtures?team=${teamID}&date=${fixtureDate}&season=${
      import.meta.env.SEASON_YEAR
    }`,
    {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6ec8aa28f3356b25368f06f62d469ec0",
      },
    }
  );
  return fixtureData.id;
};

export const getOrCreateBVBMatchByDate = async (date) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_NODE_HOST}/api/fixtures/${date}`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getVotesByFixtureID = async (fixtureID) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_NODE_HOST}/api/fixtures/${fixtureID}/votes`
    );
    return response;
  } catch (error) {
    console.log("error in getVotesByFixtureID", error);
  }
};

export const getLeagues = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_NODE_HOST}/api/fixtures/leagues`
    );
    return response;
  } catch (error) {
    console.log("error in getLeagues", error);
  }
};
