import axios from "axios";

const BASE_URL = "https://api.openligadb.de";

export const getBVBMatches = async (leagueId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getmatchdata/${leagueId}/2023/Borussia%20Dortmund/`
    );
    if (response.data.length > 0) {
      return response.data;
    }
  } catch (err) {
    console.error("Error in getting BVBBundesligaMatches");
    throw err;
  }
};

export const getBVBMatch = async (matchID) => {
  try {
    const response = await axios.get(`${BASE_URL}/getmatchdata/${matchID}`);
    return response.data;
  } catch (err) {
    console.error("Error in getting BVBBundesligaMatches");
    throw err;
  }
};
