import axios from "axios";
import { getAllBVBMatchesData } from "./openLigaData.js";
import { getOrCreateBVBMatchByDate, getVotesByFixtureID } from "./dbAPI.js";

export const getBundesligaVotesByMatchDay = async () => {
  try {
    const matchData = await getAllBVBMatchesData();
    const bundesligaMatches = matchData.filter(
      (bm) => bm.leagueShortcut === "bl1"
    );
    let res = {};
    console.log(bundesligaMatches.length);
    for (const bm of bundesligaMatches) {
      const { fixture, league } = await getOrCreateBVBMatchByDate(
        bm.matchDateTimeUTC.split("T")[0]
      );
      const fixtureID = fixture.id;
      const { data } = await getVotesByFixtureID(fixtureID);
      console.log(data);
      if (res.hasOwnProperty(league.round)) {
        res[league.round].push(data);
      } else {
        res[league.round] = [data];
      }
    }
    return res;
  } catch (e) {
    console.log(e);
  }
};

getBundesligaVotesByMatchDay();
// series={[
//   {
//     type: "line",
//     data: [1, 2, 3, 2, 1],
//     label: "reus",
//   },
//   {
//     type: "line",
//     data: [2, 0, 4, 2, 1],
//     label: "auba",
//   },
// ]}
