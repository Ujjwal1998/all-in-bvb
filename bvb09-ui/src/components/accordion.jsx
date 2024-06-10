import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const startingEleven = children[0].startXI;
  console.log(startingEleven);

  const [isOpen, setIsOpen] = useState(false);

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
      {isOpen && (
        <div className="p-4">
          {startingEleven.map((player) => {
            console.log(player);
            return (
              <div className="text-white" key={player.player.name}>
                {player.player.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
