import React, { useEffect, useState } from "react";
import axios from "axios";

import VotePlayer from "./voteplayer.jsx";
import DisplayVotes from "./displayvotes.jsx";

// ?: Ideally i can just local storage here rather than pass the has voted down to here
function VoteAccordion({
  children,
  selectedMatch,
  hasVoted,
  setHasVoted,
  voteData,
}) {
  const startingEleven = children[0].startXI;
  const fixture = selectedMatch.fixture;
  const league = selectedMatch.league;
  const subDetails = selectedMatch.events.filter(
    (evt) =>
      evt.type == "subst" &&
      evt.team.id == import.meta.env.VITE_APIFOOTBALL_TEAM_ID
  );
  const subs = subDetails.map((sub) => sub.assist);
  const voteClickHandler = async (playerID) => {
    const payload = {
      player: {
        id: playerID,
      },
      fixture: {
        id: fixture.id,
        date: fixture.date,
        league: league,
      },
    };
    const voteRequest = await axios.post(
      `${import.meta.env.VITE_NODE_HOST}/api/players/vote`,
      payload
    );
    if (voteRequest) {
      let voteData = JSON.parse(localStorage.getItem("hasVoted"));
      console.log(voteData);
      if (voteData) {
        if (!Object.hasOwn(voteData, fixture.id)) {
          voteData[fixture.id] = true;
          localStorage.setItem("hasVoted", JSON.stringify(voteData));
        }
      }
      voteData = {};
      voteData[fixture.id] = true;
      localStorage.setItem("hasVoted", JSON.stringify(voteData));
      setHasVoted(true);
      return voteRequest;
    }
  };
  console.log(hasVoted, "hasVoted");
  return (
    <div className="text-white">
      {hasVoted ? (
        <DisplayVotes voteData={voteData} />
      ) : (
        <VotePlayer
          startingEleven={startingEleven}
          subs={subs}
          voteClickHandler={voteClickHandler}
        ></VotePlayer>
      )}
    </div>
  );
}

export default VoteAccordion;
