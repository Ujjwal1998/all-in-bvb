function Score({ val }) {
  return (
    <>
      <div className="mt-4 text-white bg-black text-sm">
        {val.leagueName} - {val.group.groupName}
      </div>
      <div className="bg-zinc-800 text-white">
        {/* {val.matchIsFinished == true ? (
            <div className="content-center text-xs" id="time">
              Finished
            </div>
          ) : (
            <div className="content-center text-xs" id="time">
              LIVE
            </div>
          )} */}
        <div className="flex flex-row justify-center p-4" id="score">
          <div className="self-center">{val.team1.teamName}</div>
          <div className="self-center">
            <img src={val.team1.teamIconUrl} className="size-6"></img>
          </div>
          {val.matchIsFinished == true ? (
            <>
              <div className="content-center text-lg" id="time">
                {val.matchResults[1].pointsTeam1}
              </div>
              <div className="self-center text-lg">-</div>
              <div className="content-center text-lg" id="time">
                {val.matchResults[1].pointsTeam2}
              </div>
            </>
          ) : (
            <div className="content-center" id="time">
              LIVE
            </div>
          )}
          <div className="self-center">
            <img src={val.team2.teamIconUrl} className="size-6"></img>
          </div>
          <div className="self-center">{val.team2.teamName}</div>
        </div>
      </div>
    </>
  );
}

export default Score;
