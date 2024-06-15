function VotePlayer({ startingEleven, voteClickHandler }) {
  return (
    <div className="p-4">
      {startingEleven.map(({ player: { id, name } }) => (
        <div className="text-white flex flex-row justify-between" key={id}>
          <span>{name}</span>
          <button
            className="bg-zinc-800 text-yellow-400 border-2 border-yellow-400 my-2 text-xs"
            onClick={() => voteClickHandler(id)}
          >
            Vote!
          </button>
        </div>
      ))}
    </div>
  );
}

export default VotePlayer;
