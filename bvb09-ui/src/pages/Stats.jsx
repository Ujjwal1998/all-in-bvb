import { useEffect, useState } from "react";
import axios from "axios";
// import DifferentLength from "./linechart";
import LineChart from "../components/linechart.jsx";
import MyResponsiveBar from "../components/barchart.jsx";
import {
  getBundesligaVotesByMatchDay,
  getBundesligaVotesBarData,
} from "../apis/statisticsData.js";

function Statisitics() {
  const [bligaVotes, setBligaVotes] = useState({});
  // const [bligaBarData, setBligaBarData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const bundesligaVotes = await getBundesligaVotesByMatchDay();
      console.log(bundesligaVotes);
      const barData = await getBundesligaVotesBarData();
      console.log(barData);
      setBligaBarData(barData);
      setBligaVotes(bundesligaVotes);
    }
    fetchData();
  }, []);
  let bligaBarData = [
    {
      id: "MD 3",
      A: 1,
      B: 2,
    },
    {
      id: "MD 1",
      C: 2,
      A: 1,
    },
    {
      id: "QF 1",
      B: 15,
    },
  ];
  return (
    <div className="flex flex-col bg-zinc-800 h-screen mt-12 mx-4 text-white w-full">
      <div className="flex font-black w-6">
        <button className="">Bundeliga</button>
        <button className="">DFB Pokal</button>
        <button className="">UCL</button>
      </div>
      <div className="mt-2">
        <span className="text-xl">Bundesliga</span>
      </div>
      <div>
        <MyResponsiveBar data={bligaBarData}></MyResponsiveBar>
      </div>
    </div>
  );
}

export default Statisitics;
