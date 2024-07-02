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
    <div className="w-3/5 max-h-96">
      {bligaVotes && <LineChart data={bligaVotes} />}
      {bligaBarData && <MyResponsiveBar data={bligaBarData} />}
    </div>
  );
}

export default Statisitics;
