import { getBVBMatches } from "./openLigaAPI";

export const getAllBVBMatchesData = async () => {
  try {
    const bligaMatches = await getBVBMatches("bl1");
    const uclMatches = await getBVBMatches("champion1");
    const pokalMatches = await getBVBMatches("dfb");
    const allMatches = bligaMatches.concat(uclMatches, pokalMatches);
    // console.log(allMatches);
    allMatches.sort((a, b) => {
      const dateA = new Date(a.matchDateTime);
      const dateB = new Date(b.matchDateTime);
      const diffA = dateA - new Date().getTime();
      const diffB = dateB - new Date().getTime();
      //   console.log(diffB - diffA, b);
      return diffB - diffA;
    });
    return allMatches.slice(0, 4);
    // const today: Date = new Date();
    // const diffArr = [];
    // response.data.forEach((val, idx, arr) => {
    //   const today = new Date();
    //   const x = new Date(val["matchDateTime"]);
    //   diffArr.push(today - x);
    //   //   console.log(x.getDate());
    // });
    // console.log(Math.min.apply(Math, diffArr));
    // const closestMatch = diffArr.indexOf(Math.min.apply(Math, diffArr));
    // console.log(response.data[closestMatch]);
  } catch (err) {
    console.error("Error in getting BVBBundesligaMatchesData");
    throw err;
  }
};
