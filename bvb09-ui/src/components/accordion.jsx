import { useState, useEffect } from "react";
import VoteAccordion from "./voteaccordion.jsx";
import DataAccordion from "./dataaccordion.jsx";
const Accordion = ({
  type,
  title,
  children,
  selectedMatch,
  hasVoted,
  setHasVoted,
  voteData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (hasVoted) {
      setIsOpen(true);
    }
  }, [hasVoted]);

  return (
    <div className=" bg-zinc-900 text-white">
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
        (type === "vote" ? (
          <>
            <VoteAccordion
              children={children}
              selectedMatch={selectedMatch}
              hasVoted={hasVoted}
              setHasVoted={setHasVoted}
              voteData={voteData}
            />
          </>
        ) : (
          <>
            <DataAccordion details={children} />
          </>
        ))}
    </div>
  );
};

export default Accordion;
