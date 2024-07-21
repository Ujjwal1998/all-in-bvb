import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
function MatchPanel({ match }) {
  const [teams, setTeams] = useState("");
  //   let mql = window.matchMedia("(max-width: 425px)");
  //   console.log(mql);
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  return (
    <div className="flex w-full h-8 m-4 justify-between border-l-4 border-l-yellow-400 pl-4">
      <div className="flex">
        <img src={match.team1.teamIconUrl} alt="team1-logo" className="w-8" />
        <span className="mx-4 w-28 sm:w-full sm:mx-2 md:w-80">
          {isMobile ? (
            <>
              {match.team1.shortName}&nbsp;:&nbsp;{match.team2.shortName}{" "}
            </>
          ) : (
            <>
              {match.team1.teamName}&nbsp;:&nbsp;{match.team2.teamName}
            </>
          )}
        </span>
        <img src={match.team2.teamIconUrl} alt="team1-logo" className="w-8" />
      </div>
      <span className="">{match.matchDateTimeUTC.split("T")[0]}</span>
    </div>
  );
}

export default MatchPanel;
