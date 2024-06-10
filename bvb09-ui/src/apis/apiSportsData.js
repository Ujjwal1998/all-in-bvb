import { getBVBMatchDetail, getBVBFixtureID } from "./apiSportsAPI.js";
import { getBVBMatchByDate, postBVBMatch } from "./dbAPI.js";

export const getBVBMatchData = async (fixtureDate) => {
  if (getBVBMatchByDate(fixtureDate) == -1) {
    const fixtureResponse = await getBVBFixtureID(
      165,
      fixtureDate.split("T")[0]
    );
    const fixtureID = fixtureResponse.response[0].fixture.id;
    const fixtureDetailResponse = await getBVBMatchDetail(fixtureID);
    postBVBMatch(fixtureDetailResponse);
  } else {
    return getBVBMatchByDate(fixtureDate);
  }
};
