import { getBVBMatchDetail, getBVBFixtureID } from "./apiSportsAPI.js";

export const getBVBMatchData = async (fixtureDate) => {
  console.log(fixtureDate, "fd");
  const fixtureResponse = await getBVBFixtureID(165, fixtureDate.split("T")[0]);
  console.log(fixtureResponse);
  const fixtureID = fixtureResponse.response[0].fixture.id;
  const fixtureDetailResponse = await getBVBMatchDetail(fixtureID);
  return fixtureDetailResponse.response[0];
};
