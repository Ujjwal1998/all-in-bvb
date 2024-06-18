import React, { useState } from "react";
function DataAccordion({ details }) {
  const [isOpen, setIsOpen] = useState(false);
  const cards = details.filter((val, idx) => val.type == "Card");
  const subs = details.filter((val, idx) => val.type == "subst");
  console.log(cards);
  return (
    <>
      <div className=" bg-zinc-900 text-white ">
        <div
          className="flex justify-between items-center p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-sm text-white">Details</h2>
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
          <div>
            <div className="text-sm">Cards</div>
            {cards.map((card) => {
              return (
                <div className="text-xs">
                  {card.time.elapsed}' {card.player.name} - {card.detail}
                </div>
              );
            })}
            <div className="text-sm">Substitutions</div>
            {subs.map((sub) => {
              return (
                <div className="text-xs">
                  {sub.time.elapsed}' {sub.player.name} {"<->"}{" "}
                  {sub.assist.name}
                </div>
              );
            })}
            <div></div>
          </div>
        )}
      </div>
    </>
  );
}

export default DataAccordion;
