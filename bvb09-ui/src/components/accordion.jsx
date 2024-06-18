import VoteAccordion from "./voteaccordion.jsx";
import DataAccordion from "./dataaccordion.jsx";
const Accordion = ({
  type,
  children,
  fixture,
  hasVoted,
  setHasVoted,
  voteData,
}) => {
  return (
    <>
      {type === "vote" ? (
        <>
          <VoteAccordion
            children={children}
            fixture={fixture}
            hasVoted={hasVoted}
            setHasVoted={setHasVoted}
            voteData={voteData}
          />
        </>
      ) : (
        <>
          <DataAccordion details={children} />
        </>
      )}
    </>
  );
};

export default Accordion;
