import { useEffect, useState } from "react";
import axios from "axios";
// import DifferentLength from "./linechart";
import LineChart from "../components/linechart.jsx";
import MyResponsiveBar from "../components/barchart.jsx";
import {
  getBundesligaVotesByMatchDay,
  getLeagueVotesBarData,
} from "../apis/statisticsData.js";

function Statisitics() {
  const [bligaVotes, setBligaVotes] = useState(null);
  const [bligaBarData, setBligaBarData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const bundesligaVotes = await getBundesligaVotesByMatchDay();
      // ? CONSTANT IN USE
      const barData = await getLeagueVotesBarData(4);
      setBligaBarData(barData);
      setBligaVotes(bundesligaVotes);
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col bg-zinc-800 h-screen w-full mt-12 mx-4 text-white w-full">
      <div className="flex font-black w-6">
        <button className="">Bundeliga</button>
        <button className="">DFB Pokal</button>
        <button className="">UCL</button>
      </div>
      <div className="mt-2">
        <span className="text-xl">Bundesliga</span>
      </div>
      <div
        className="content-center self-center h-1/3 w-full"
        // style={{ height: "300px", width: "350px" }}
      >
        {bligaBarData && (
          <MyResponsiveBar data={bligaBarData}></MyResponsiveBar>
        )}
      </div>
      <div
        className="content-center self-center h-1/2 w-full mt-4"
        // style={{ height: "300px", width: "350px" }}
      >
        {bligaVotes && <LineChart data={bligaVotes}></LineChart>}
      </div>
    </div>
  );
}

export default Statisitics;
