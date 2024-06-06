import { useEffect, useState } from "react";
import bvb from "../assets/bvb4.jpg";
import { getAllBVBMatchesData } from "../apis/openLigaData.js";
import Score from "./score.jsx";

function Main() {
  const [matches, setMatches] = useState();
  const [selectedMatch, setSelectedMatch] = useState();
  useEffect(() => {
    async function fetchData() {
      const matchData = await getAllBVBMatchesData();
      setMatches(matchData);
      setSelectedMatch(matchData[0]);
    }
    fetchData();
  }, []);
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
    console.log(selectedMatch.matchID, val.matchID);
    if (today == matchDay) {
      return <button>Today</button>;
    } else if (selectedMatch.matchID == val.matchID) {
      return (
        <button
          onClick={() => matchDateButtonHandler(val)}
          className="bg-zinc-700 text-yellow-400 border-yellow-400 focus:outline-none active:underline focus:underline active:outline-none focus:border-yellow-400"
          id={val.matchID}
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
        >
          {matchDate.toLocaleString("en-us", {
            day: "numeric",
            month: "short",
          })}
        </button>
      );
    }
  }
  function matchDateButtonHandler(val) {
    setSelectedMatch(val);
  }

  return (
    <div className="flex flex-col bg-zinc-800">
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
        {selectedMatch ? <Score val={selectedMatch} /> : <>LOADING</>}
      </section>
    </div>
  );
}

export default Main;
