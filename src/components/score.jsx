import Scorer from "./scorer.jsx";
function Score({ val }) {
  const calcScorerTeam = (val) => {
    let isBVBHomeTeam = Boolean(val.team1.teamId == 7);
    return val.goals.map((goal, idx) => {
      // console.log("scorer", goal);
      return <Scorer goal={goal} isBVBHomeTeam={isBVBHomeTeam} />;
    });
  };
  return (
    <>
      <div className="mt-4 text-white bg-black text-sm p-2">
        {val.league.name} - {val.league.round}
      </div>
      <div className="bg-zinc-800 text-white">
        <div className="grid grid-cols-3 p-2">
          <div className="grid grid-rows-2" id="team-1">
            <img
              src={val.teams.home.logo}
              className="size-8 place-self-center"
            ></img>
            <div className="place-self-center text-center text-sm">
              {val.teams.home.name}
            </div>
          </div>
          <div id="score" className="grid grid-cols-3">
            <div className="place-self-center text-lg" id="time">
              {val.goals.home}
            </div>
            <div className="place-self-center text-lg">-</div>
            <div className="place-self-center text-lg" id="time">
              {val.goals.away}
            </div>
          </div>
          <div id="team-2" className="grid grid-rows-2">
            <img
              src={val.teams.away.logo}
              className="size-8 place-self-center"
            ></img>
            <div className="place-self-center text-center text-sm">
              {val.teams.away.name}
            </div>
          </div>
        </div>
      </div>
      {/* <div id="scorer">{calcScorerTeam(val)}</div> */}
    </>
  );
}

export default Score;
