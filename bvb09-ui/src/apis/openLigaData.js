import { getBVBMatches, getBVBMatch } from "./openLigaAPI";

export const getAllBVBMatchesData = async () => {
  try {
    const bligaMatches = await getBVBMatches("bl1");
    const uclMatches = await getBVBMatches("champion1");
    const pokalMatches = await getBVBMatches("dfb");
    const allMatches = bligaMatches.concat(uclMatches, pokalMatches);
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
// export const getBVBMatchData = async (matchID) => {
//   try {
//     const selectedMatch = await getBVBMatch(matchID);
//     return selectedMatch;
//   } catch (err) {
//     console.error("Error in getting getBVBMatchData");
//     throw err;
//   }
// };
