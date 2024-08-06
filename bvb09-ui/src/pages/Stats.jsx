import { useEffect, useState } from "react";
import axios from "axios";
// import DifferentLength from "./linechart";
import LineChart from "../components/linechart.jsx";
import MyResponsiveBar from "../components/barchart.jsx";
import Button from "../components/Button.jsx";
import {
  getLeagueVotesByMatchDay,
  getLeagueVotesBarData,
} from "../apis/statisticsData.js";
import { getLeagues } from "../apis/dbAPI.js";
import { BAR_CHART_DATA, LINE_CHART_DATA } from "../../constants.js";

// async function getLeagueStats(leagueID) {
//   const lineChartData = await getLeagueVotesByMatchDay(leagueID);
//   const barGraphData = await getLeagueVotesBarData(leagueID);
//   return [lineChartData, barGraphData];
// }

function Statisitics() {
  // const [lineChartData, setLineChartData] = useState(null);
  // const [barGraphData, setBarGraphData] = useState(null);
  // const [leagues, setLeagues] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     let data = await getLeagueStats(import.meta.env.VITE_LEAGUEID_DB);
  //     let leagueData = await getLeagues();
  //     console.log("ld", leagueData);
  //     let leaguesToSet = leagueData.data.map((val, idx) => {
  //       console.log(val["_id"], idx);
  //       return val["_id"];
  //     });
  //     setLeagues(leaguesToSet);
  //     setLineChartData(data[0]);
  //     setBarGraphData(data[1]);
  //   }
  //   fetchData();
  // }, []);
  // async function handleLeagueChange(leagueID) {
  //   let data = await getLeagueStats(leagueID);
  //   setLineChartData(data[0]);
  //   setBarGraphData(data[1]);
  // }
  // console.log(leagues, "leagues");
  // console.log(lineChartData, "linechart");
  // console.log(barGraphData, "bargraph");
  return (
    <div className="flex flex-col bg-zinc-800 h-screen w-full mt-12 mx-4 text-white w-2/3 sm:mt-0">
      <div className="flex content-center justify-center mt-2">
        {/* {leagues.map((val) => (
          <Button onClickHandler={() => handleLeagueChange(val.league_id)}>
            {val.league_name}
          </Button>
        ))} */}
        {/* <Button onClickHandler={() => handleLeagueChange(4)}>Bundesliga</Button>
        <Button onClickHandler={() => handleLeagueChange(4)}>DFB Pokal</Button>
        <Button onClickHandler={() => handleLeagueChange(4)}>UCL</Button> */}
      </div>
      <div
        className="content-center self-center h-1/3 w-full mt-2"
        // style={{ height: "300px", width: "350px" }}
      >
        {BAR_CHART_DATA && (
          <MyResponsiveBar data={BAR_CHART_DATA}></MyResponsiveBar>
        )}
      </div>
      <div
        className="content-center self-center h-1/2 w-full mt-2"
        // style={{ height: "300px", width: "350px" }}
      >
        {LINE_CHART_DATA && <LineChart data={LINE_CHART_DATA}></LineChart>}
      </div>
    </div>
  );
}

export default Statisitics;
