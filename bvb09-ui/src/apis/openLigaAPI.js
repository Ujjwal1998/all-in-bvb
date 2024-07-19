import axios from "axios";

const BASE_URL = "https://api.openligadb.de";

export const getLeagueMatches = async (leagueId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getmatchdata/${leagueId}/${
        import.meta.env.VITE_SEASON_YEAR
      }/${import.meta.env.VITE_TEAM_NAME}/`
    );
    if (response.data.length > 0) {
      return response.data;
    }
  } catch (err) {
    console.error(`Error in getting BVB ${leagueId}Matches`, err);
    throw err;
  }
};
