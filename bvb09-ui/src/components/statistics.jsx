import { useEffect, useState } from "react";
import axios from "axios";
// import DifferentLength from "./linechart";
import LineChart from "./linechart";
import MyResponsiveBar from "./barchart.jsx";
import {
  getBundesligaVotesByMatchDay,
  getBundesligaVotesBarData,
} from "../apis/statisticsData.js";

function Statisitics() {
  const [bligaVotes, setBligaVotes] = useState(null);
  const [bligaBarData, setBligaBarData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const bundesligaVotes = await getBundesligaVotesByMatchDay();
      console.log(bundesligaVotes);
      const barData = await getBundesligaVotesBarData();
      setBligaBarData(barData);
      setBligaVotes(bundesligaVotes);
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen w-full bg-zinc-800">
      <div className="grow">
        {bligaVotes && <LineChart data={bligaVotes} />}
      </div>
      <div className="grow">
        {bligaBarData && <MyResponsiveBar data={bligaBarData} />}
      </div>
    </div>
  );
}

export default Statisitics;
