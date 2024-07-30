import { useEffect, useState } from "react";
import { getLeagueMatchesData } from "../apis/openLigaData";
// import { getLeagues } from "../apis/dbAPI";
import MatchPanel from "../components/MatchPanel";
import Button from "../components/Button";
function Schedule() {
  const [leagueMatches, setLeagueMatches] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [leagueTitle, setLeagueTitle] = useState("Bundesliga");
  useEffect(() => {
    async function fetchData(leagueID) {
      const data = await getLeagueMatchesData(leagueID);
      // let leagueData = await getLeagues();
      // let leaguesToSet = leagueData.data.map((val, idx) => {
      //   return val["_id"];
      // });
      // setLeagues(leaguesToSet);
      // setLeagueMatches(data);
    }
    fetchData("bl1");
  }, []);
  async function handleLeagueChange(leagueID, title) {
    const data = await getLeagueMatchesData(leagueID);
    setLeagueMatches(data);
    setLeagueTitle(title);
  }
  console.log(leagueMatches);
  return (
    <>
      <div className="h-full">
        <div className="flex content-center justify-center mt-14">
          {/* {leagues.map((val) => (
            <Button onClickHandler={() => handleLeagueChange(val.league_id)}>
              {val.league_name}
            </Button>
          ))} */}
          <Button
            onClickHandler={() => handleLeagueChange("bl1", "Bundesliga")}
          >
            Bundesliga
          </Button>
          <Button onClickHandler={() => handleLeagueChange("dfb", "DFB Pokal")}>
            DFB Pokal
          </Button>
          <Button
            onClickHandler={() => handleLeagueChange("champions1", "UCL")}
          >
            UCL
          </Button>
        </div>
        <div className="mt-2 text-xl underline">{leagueTitle}</div>
        <section className="text-sm">
          {leagueMatches ? (
            leagueMatches.map((match, idx) => (
              <MatchPanel match={match} key={idx}></MatchPanel>
            ))
          ) : (
            <>No data available</>
          )}
        </section>
      </div>
    </>
  );
}

export default Schedule;
