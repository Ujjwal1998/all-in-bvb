import axios from "axios";
import { getAllBVBMatchesData } from "./openLigaData.js";
import { getOrCreateBVBMatchByDate, getVotesByFixtureID } from "./dbAPI.js";

export const getBundesligaVotesByMatchDay = async () => {
  try {
    const bundesligaVotes = await axios.get(
      "https://all-in-bvb.onrender.com/api/players/league/4/votes"
    );
    let data = [];
    for (const [key, value] of Object.entries(bundesligaVotes.data)) {
      data.push({ id: key, data: value });
    }
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getBundesligaVotesBarData = async () => {
  try {
    const bundesligaVotes = await axios.get(
      "https://all-in-bvb.onrender.com/api/players/league/4/votes"
    );
    let data = [];
    for (const [key, value] of Object.entries(bundesligaVotes.data)) {
      let playerData = { player: key };
      for (const val of value) {
        playerData[val["x"]] = val["y"];
      }
      data.push(playerData);
    }
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
