import { useEffect, useState } from "react";
import { getLeagueMatchesData } from "../apis/openLigaData";
import MatchPanel from "../components/MatchPanel";
function Schedule() {
  const [leagueMatches, setLeagueMatches] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getLeagueMatchesData("bl1");
      setLeagueMatches(data);
    }
    fetchData();
  }, []);
  console.log(leagueMatches);
  return (
    <>
      <div className="h-full">
        <div className="mt-14 text-xl underline">Bundesliga</div>
        <section className="text-sm">
          {leagueMatches.map((match) => (
            <MatchPanel match={match}></MatchPanel>
          ))}
        </section>
      </div>
    </>
  );
}

export default Schedule;
