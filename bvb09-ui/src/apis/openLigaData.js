import { getLeagueMatches } from "./openLigaAPI.js";

export const getAllLeagueMatchesData = async () => {
  try {
    let allMatches = [];
    for (const league of import.meta.env.VITE_LEAGUES_TO_SEARCH.split(" ")) {
      console.log(league);
      const leagueMatches = await getLeagueMatches(league);
      if (leagueMatches.length > 0) {
        const finishedLeagueMatches = leagueMatches.filter(
          (match) => match.matchIsFinished === true
        );
        allMatches.push(...finishedLeagueMatches);
      }
    }
    if (allMatches.length > 0) {
      allMatches.sort((a, b) => {
        const dateA = new Date(a.matchDateTime);
        const dateB = new Date(b.matchDateTime);
        const diffA = dateA - new Date().getTime();
        const diffB = dateB - new Date().getTime();
        return diffB - diffA;
      });
      return allMatches.slice(0, 4);
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error in getting getAllLeagueMatchesData" + err);
    throw err;
  }
};

export const getLeagueMatchesData = async (leagueID) => {
  try {
    const leagueMatches = await getLeagueMatches(leagueID);
    return leagueMatches;
  } catch (err) {
    console.error("Error in getting BVBBundesligaMatchesData");
    throw err;
  }
};
