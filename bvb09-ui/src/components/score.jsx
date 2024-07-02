import Scorer from "./scorer.jsx";
import Accordion from "./accordion.jsx";
import { useEffect, useState } from "react";

function Score({ val, hasVoted, setHasVoted, voteData }) {
  const homeTeamID = val.teams.home.id;
  const isBVBHome = Boolean(
    homeTeamID == import.meta.env.VITE_APIFOOTBALL_TEAM_ID
  );
  const homeGoals = val.events.filter((evt, idx) => {
    return evt.type == "Goal" && homeTeamID == evt.team.id;
  });
  const awayGoals = val.events.filter((evt, idx) => {
    return evt.type == "Goal" && homeTeamID != evt.team.id;
  });
  const notGoals = val.events.filter((evt, idx) => {
    return evt.type != "Goal";
  });
  const subDetails = val.events.filter(
    (evt) =>
      evt.type == "subst" &&
      evt.team.id == import.meta.env.VITE_APIFOOTBALL_TEAM_ID
  );
  const subs = subDetails.map((sub) => sub.assist);
  return (
    <>
      <div className="mt-4 text-white bg-black text-sm p-2 flex flex-row">
        <img src={val.league.logo} className="size-5 bg-white"></img>
        <div className="mx-2">
          {val.league.name} - {val.league.round}
        </div>
      </div>
      <div className="bg-zinc-800 text-white p-4">
        <div className="grid grid-cols-3 p-2">
          <div className="grid grid-rows-2" id="team-1">
            <img
              src={val.teams.home.logo}
              className="size-8 place-self-center"
            ></img>
            <div className="place-self-center text-center text-sm sm:text-base">
              {val.teams.home.name}
            </div>
          </div>
          <div id="score" className="grid grid-cols-3">
            <div className="place-self-center text-lg sm:text-3xl" id="time">
              {val.goals.home}
            </div>
            <div className="place-self-center text-lg sm:text-3xl">-</div>
            <div className="place-self-center text-lg sm:text-3xl" id="time">
              {val.goals.away}
            </div>
          </div>
          <div id="team-2" className="grid grid-rows-2">
            <img
              src={val.teams.away.logo}
              className="size-8 place-self-center"
            ></img>
            <div className="place-self-center text-center text-sm sm:text-base">
              {val.teams.away.name}
            </div>
          </div>
        </div>
      </div>
      <div id="events" className="grid grid-cols-2">
        {homeGoals.map((goal, idx) => {
          if (isBVBHome) {
            return (
              <Scorer goal={goal} key={idx} classNames="text-yellow-400" />
            );
          } else {
            return <Scorer goal={goal} key={idx} classNames="text-white" />;
          }
        })}
        {awayGoals.map((goal, idx) => {
          if (!isBVBHome) {
            return (
              <Scorer goal={goal} key={idx} classNames="text-yellow-400" />
            );
          } else {
            return <Scorer goal={goal} key={idx} classNames="text-white" />;
          }
        })}
      </div>
      <Accordion type="data">{notGoals}</Accordion>
      <Accordion
        type="vote"
        fixture={val.fixture}
        league={val.league}
        subs={subs}
        hasVoted={hasVoted}
        setHasVoted={setHasVoted}
        voteData={voteData}
      >
        {val.lineups.filter((lineup) => {
          return lineup.team.id == import.meta.env.VITE_APIFOOTBALL_TEAM_ID;
        })}
      </Accordion>
      {/* <div id="scorer">{calcScorerTeam(val)}</div> */}
    </>
  );
}

export default Score;
