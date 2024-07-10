import React, { useEffect, useState } from "react";
import axios from "axios";

import VotePlayer from "./voteplayer.jsx";
import DisplayVotes from "./displayvotes.jsx";

// ?: Ideally i can just local storage here rather than pass the has voted down to here
function VoteAccordion({
  children,
  fixture,
  league,
  subs,
  hasVoted,
  setHasVoted,
  voteData,
}) {
  console.log(children, "CHILD");
  const startingEleven = children[0].startXI;
  const [isOpen, setIsOpen] = useState(false);
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
      "https://all-in-bvb.onrender.com/api/players/vote",
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
  useEffect(() => {
    if (hasVoted) {
      setIsOpen(true);
    }
  }, [hasVoted]);

  return (
    <div className=" bg-zinc-900 text-white ">
      <div
        className="flex justify-between items-center p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-sm text-white">
          {hasVoted ? <>MOTM Results</> : <>Vote your MOTM</>}
        </h2>
        <svg
          className={`w-6 h-6 text-white ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
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
