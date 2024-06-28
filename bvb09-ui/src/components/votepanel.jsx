function VotePanel({ id, name, voteClickHandler, isSub }) {
  return (
    <div
      className="text-white flex flex-row justify-between bg-zinc-800 m-1 "
      key={id}
    >
      <span className="w-1/3">{name}</span>
      <>{isSub && <span>SUB</span>}</>
      <button
        className="bg-zinc-800 text-yellow-400 border-2 border-yellow-400 my-2 text-xs"
        onClick={() => voteClickHandler(id)}
      >
        Vote!
      </button>
    </div>
  );
}

export default VotePanel;
