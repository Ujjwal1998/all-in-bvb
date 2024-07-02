import VoteAccordion from "./voteaccordion.jsx";
import DataAccordion from "./dataaccordion.jsx";
const Accordion = ({
  type,
  children,
  fixture,
  league,
  subs,
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
            league={league}
            subs={subs}
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
