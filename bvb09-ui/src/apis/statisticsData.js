import axios from "axios";

export const getLeagueVotesByMatchDay = async (leagueID) => {
  try {
    console.log(leagueID);
    const leagueVotes = await axios.get(
      `${import.meta.env.VITE_NODE_HOST}/api/players/league/${leagueID}/votes`
    );
    console.log(leagueVotes);
    let data = [];
    for (const [key, value] of Object.entries(leagueVotes.data)) {
      data.push({ id: key, data: value });
    }
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getLeagueVotesBarData = async (leagueID) => {
  try {
    const leagueFixtures = await axios.get(
      `${import.meta.env.VITE_NODE_HOST}/api/fixtures/leagues/${leagueID}`
    );
    let data = [];
    for (const {
      fixture: { id },
    } of leagueFixtures.data) {
      const fixtureVotes = await axios.get(
        `${import.meta.env.VITE_NODE_HOST}/api/players/fixtures/${id}/votes`
      );
      let currentData = {};
      for (const { round_number, player_name, votes } of fixtureVotes.data) {
        currentData["round"] = round_number;
        currentData[player_name] = votes;
      }
      data.push(currentData);
    }
    return data;
  } catch (e) {
    console.log(e);
  }
};
