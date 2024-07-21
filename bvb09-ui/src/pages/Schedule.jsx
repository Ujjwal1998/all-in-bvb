import { useEffect, useState } from "react";
import { getLeagueMatchesData } from "../apis/openLigaData";
import MatchPanel from "../components/MatchPanel";
import Button from "../components/Button";
function Schedule() {
  const [leagueMatches, setLeagueMatches] = useState([]);
  const [leagueTitle, setLeagueTitle] = useState("Bundesliga");
  useEffect(() => {
    async function fetchData(leagueID) {
      const data = await getLeagueMatchesData(leagueID);
      setLeagueMatches(data);
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
            leagueMatches.map((match) => (
              <MatchPanel match={match}></MatchPanel>
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
