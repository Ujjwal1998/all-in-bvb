import axios from "axios";
import { getBVBMatchDetail, getBVBFixtureID } from "./apiSportsAPI.js";

export const getAndCreateBVBMatchByDate = async (date) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/fixtures/${date}`
    );
    if (response.status == 200) {
      return response.data;
    }
    // if (response.status == 404) {
    //   const fixtureResponse = await getBVBFixtureID(165, date);
    //   const fixtureID = fixtureResponse.response[0].fixture.id;
    //   const fixtureDetailResponse = await getBVBMatchDetail(fixtureID);
    //   await axios.post(
    //     "http://localhost:3000/api/fixtures",
    //     fixtureDetailResponse
    //   );
    //   console.log("Created entry");
    // }
  } catch {
    const fixtureResponse = await getBVBFixtureID(165, date);
    const fixtureID = fixtureResponse.response[0].fixture.id;
    const fixtureDetailResponse = await getBVBMatchDetail(fixtureID);
    console.log(fixtureDetailResponse.response[0]);
    await axios.post(
      "http://localhost:3000/api/fixtures",
      fixtureDetailResponse.response[0]
    );
    console.log("Created entry");
    return fixtureDetailResponse.response[0];
  }
};

export const getVotesByFixtureID = async (fixtureID) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/players/votes/${fixtureID}`
    );
    return response;
  } catch (error) {
    console.log("error in getVotesByFixtureID", error);
  }
};
