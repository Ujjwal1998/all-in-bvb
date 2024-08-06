import { useEffect, useState } from "react";
import MyResponsivePie from "./responsivepie";
import { getVotesByFixtureID } from "../apis/dbAPI";

import { PIE_CHART_DATA } from "../../constants";

function DisplayVotes({ fixtureID }) {
  const [voteData, setVoteData] = useState(null);
  // useEffect(() => {
  //   async function fetchData(fixtureID) {
  //     const resp = await getVotesByFixtureID(fixtureID);
  //     console.log(resp);
  //     let voteDataArr = [];
  //     for (const [key, value] of Object.entries(resp.data)) {
  //       if (value > 0) {
  //         voteDataArr.push({ id: key, label: key, value: value });
  //       }
  //     }
  //     setVoteData(voteDataArr);
  //   }
  //   fetchData(fixtureID);
  //   // setTimeout(() => fetchData(fixtureID), 2000);
  // }, [fixtureID]);
  useEffect(() => {
    setVoteData(PIE_CHART_DATA[Math.floor(Math.random() * 6)]);
  }, [fixtureID]);
  console.log("display votes", voteData);
  return (
    <div className="flex w-300 h-96">
      <MyResponsivePie data={voteData}></MyResponsivePie>
    </div>
  );
}

export default DisplayVotes;
