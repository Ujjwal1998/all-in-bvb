import React, { useState } from "react";
import axios from "axios";

import VotePlayer from "./voteplayer.jsx";

const Accordion = ({
  title,
  children,
  fixture,
  hasVoted,
  setHasVoted,
  voteData,
}) => {
  const startingEleven = children[0].startXI;
  const [isOpen, setIsOpen] = useState(false);
  const voteClickHandler = async (playerID) => {
    const payload = {
      player: {
        id: playerID,
      },
      fixture: {
        id: fixture.id,
      },
    };
    const voteRequest = await axios.post(
      "http://localhost:3000/api/players/vote",
      payload
    );
    if (voteRequest) {
      setHasVoted(true);
      return voteRequest;
    }
  };
  console.log(voteData);
  return (
    <div className=" bg-zinc-900">
      <div
        className="flex justify-between items-center p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-sm text-white">{title}</h2>
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
      {isOpen &&
        (hasVoted ? (
          <div className="text-white">{[voteData]}</div>
        ) : (
          <VotePlayer
            startingEleven={startingEleven}
            voteClickHandler={voteClickHandler}
          ></VotePlayer>
        ))}
    </div>
  );
};

export default Accordion;
