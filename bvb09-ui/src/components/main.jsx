import { useEffect, useState } from "react";
import bvb from "../assets/bvb4.jpg";
import { getAllBVBMatchesData } from "../apis/openLigaData.js";
import { getAndCreateBVBMatchByDate } from "../apis/dbAPI.js";
import { getVotesByFixtureID } from "../apis/dbAPI.js";
import Score from "./score.jsx";

function Main() {
  const [matches, setMatches] = useState();
  const [selectedMatch, setSelectedMatch] = useState();
  const [hasVoted, setHasVoted] = useState(false);
  const [voteData, setVoteData] = useState("");
  // effect to render the date buttons
  useEffect(() => {
    async function fetchData() {
      const matchData = await getAllBVBMatchesData();
      const selectedBVBMatch = await getAndCreateBVBMatchByDate(
        matchData[0].matchDateTimeUTC.split("T")[0]
      );
      setMatches(matchData);
      setSelectedMatch(selectedBVBMatch);
    }
    fetchData();
  }, []);
  // effect to getVotesByFixtureID
  useEffect(() => {
    console.log(hasVoted, "changed");
    async function fetchData() {
      const resp = await getVotesByFixtureID(selectedMatch.fixture.id);
      setVoteData(resp.data);
    }
    hasVoted && fetchData();
  }, [hasVoted]);
  function dateComparisonHandler(val) {
    const nowDate = new Date();
    const today =
      nowDate.getFullYear() +
      "/" +
      (nowDate.getMonth() + 1) +
      "/" +
      nowDate.getDate();
    const matchDate = new Date(val.matchDateTime);
    const matchDay =
      matchDate.getFullYear() +
      "/" +
      (matchDate.getMonth() + 1) +
      "/" +
      matchDate.getDate();
    return dateButtonRenderer(today, matchDay, matchDate, val);
  }
  function dateButtonRenderer(today, matchDay, matchDate, val) {
    if (today == matchDay) {
      return <button>Today</button>;
    } else if (selectedMatch.matchID == val.matchID) {
      return (
        <button
          onClick={() => matchDateButtonHandler(val)}
          className="bg-zinc-700 text-yellow-400 border-yellow-400 focus:outline-none active:underline focus:underline active:outline-none focus:border-yellow-400"
          id={val.matchID}
          key={val.matchID}
        >
          {matchDate.toLocaleString("en-us", {
            day: "numeric",
            month: "short",
          })}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => matchDateButtonHandler(val)}
          className="bg-zinc-700 text-white hover:text-yellow-400 hover:border-yellow-400 hover:border-2 active:border-2 active:border-yellow-400 focus:border-2 focus:border-yellow-400 focus:outline-none active:underline focus:underline active:text-yellow-400 focus:text-yellow-400"
          id={val.matchID}
          key={val.matchID}
        >
          {matchDate.toLocaleString("en-us", {
            day: "numeric",
            month: "short",
          })}
        </button>
      );
    }
  }
  async function matchDateButtonHandler(val) {
    const selectedBVBMatch = await getAndCreateBVBMatchByDate(
      val.matchDateTimeUTC.split("T")[0]
    );
    setSelectedMatch(selectedBVBMatch);
    setHasVoted(false);
  }
  return (
    <div className="flex flex-col bg-zinc-800 sm:w-1/3">
      <section className="">
        {/* <div className="rounded-2xl"> */}
        <img className=" rounded-xl" src={bvb} alt="BVB Poster" />
        {/* </div> */}
      </section>
      <section className="mt-2 grow min-h-screen">
        {/* <div className="bg-zinc-400 w-3/5">Search Bar</div> */}
        <div className="bg-zinc-700 mt-1">
          <div className="flex flex-row justify-evenly">
            {matches ? (
              matches.map((val, idx) => {
                return dateComparisonHandler(val);
              })
            ) : (
              <>LOADING</>
            )}
          </div>
        </div>
        {selectedMatch ? (
          <Score
            val={selectedMatch}
            hasVoted={hasVoted}
            setHasVoted={setHasVoted}
            voteData={voteData}
          />
        ) : (
          <>LOADING</>
        )}
      </section>
    </div>
  );
}

export default Main;
