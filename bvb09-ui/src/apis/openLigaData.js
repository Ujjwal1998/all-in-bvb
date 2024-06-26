import { getLeagueMatches, getBVBMatch } from "./openLigaAPI.js";

const LEAGUES_TO_SEARCH = ["em"];

export const getAllBVBMatchesData = async () => {
  try {
    let allMatches = [];
    for (const league of LEAGUES_TO_SEARCH) {
      const leagueMatches = await getLeagueMatches(league);
      const finishedLeagueMatches = leagueMatches.filter(
        (match) => match.matchIsFinished === true
      );
      allMatches.push(...finishedLeagueMatches);
    }
    console.log(allMatches, "LM");

    allMatches.sort((a, b) => {
      const dateA = new Date(a.matchDateTime);
      const dateB = new Date(b.matchDateTime);
      const diffA = dateA - new Date().getTime();
      const diffB = dateB - new Date().getTime();
      return diffB - diffA;
    });
    return allMatches.slice(0, 4);
  } catch (err) {
    console.error("Error in getting BVBBundesligaMatchesData");
    throw err;
  }
};
