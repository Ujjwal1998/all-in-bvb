import VotePanel from "./votepanel";

function VotePlayer({ startingEleven, subs, voteClickHandler }) {
  return (
    <div className="">
      {startingEleven.map(({ player: { id, name } }) => (
        <VotePanel
          id={id}
          name={name}
          key={id}
          voteClickHandler={voteClickHandler}
        />
      ))}
      {subs.map(({ id, name }) => (
        <VotePanel
          id={id}
          key={id}
          name={name}
          voteClickHandler={voteClickHandler}
          isSub={true}
        />
      ))}
    </div>
  );
}

export default VotePlayer;
