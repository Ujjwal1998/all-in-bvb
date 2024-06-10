import Scorer from "./scorer.jsx";
import Accordion from "./accordion.jsx";

function Score({ val }) {
  console.log(val);
  const homeTeamID = val.teams.home.id;
  const isBVBHome = Boolean(homeTeamID == 165);
  const homeGoals = val.events.filter((evt, idx) => {
    return evt.type == "Goal" && homeTeamID == evt.team.id;
  });
  const awayGoals = val.events.filter((evt, idx) => {
    return evt.type == "Goal" && homeTeamID != evt.team.id;
  });
  const notGoals = val.events.filter((evt, idx) => {
    return evt.type != "Goal";
  });
  return (
    <>
      <div className="mt-4 text-white bg-black text-sm p-2 flex flex-row">
        <img src={val.league.logo} className="size-5 bg-white"></img>
        <div className="mx-2">
          {val.league.name} - {val.league.round}
        </div>
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
      <div id="events" className="grid grid-cols-3">
        <div id="home-goals" className="text-white text-xs">
          {homeGoals.map((goal, idx) => {
            if (isBVBHome) {
              return (
                <Scorer
                  goal={goal}
                  idx={idx}
                  classNames="text-yellow-400 text-xs"
                />
              );
            } else {
              return (
                <Scorer
                  goal={goal}
                  idx={idx}
                  classNames="text-white-400 text-xs"
                />
              );
            }
          })}
        </div>
        <div id="assists">
          {notGoals.map((ng, idx) => (
            <div key={idx} className="text-white text-xs">
              {ng.time.elapsed}' {ng.detail}
            </div>
          ))}
        </div>
        <div id="away-goals">
          {awayGoals.map((goal, idx) => {
            if (!isBVBHome) {
              return (
                <Scorer
                  goal={goal}
                  idx={idx}
                  classNames="text-yellow-400 text-xs"
                />
              );
            } else {
              return (
                <Scorer goal={goal} idx={idx} classNames="text-white text-xs" />
              );
            }
          })}
        </div>
      </div>
      <Accordion
        title="Vote your MOTM!"
        children={val.lineups.filter((lineup) => lineup.team.id == 165)}
      />
      {/* <div id="scorer">{calcScorerTeam(val)}</div> */}
    </>
  );
}

export default Score;
