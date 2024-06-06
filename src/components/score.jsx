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
        <div className="grid grid-cols-3 p-2">
          <div className="grid grid-rows-2" id="team-1">
            <img
              src={val.team1.teamIconUrl}
              className="size-8 place-self-center"
            ></img>
            <div className="place-self-center text-center text-sm">
              {val.team1.teamName}
            </div>
          </div>
          <div id="score" className="grid grid-cols-3">
            {val.matchIsFinished == true ? (
              <>
                <div className="place-self-center text-lg" id="time">
                  {val.matchResults[1].pointsTeam1}
                </div>
                <div className="place-self-center text-lg">-</div>
                <div className="place-self-center text-lg" id="time">
                  {val.matchResults[1].pointsTeam2}
                </div>
              </>
            ) : (
              <div className="content-center" id="time">
                LIVE
              </div>
            )}
          </div>
          <div id="team-2" className="grid grid-rows-2">
            <img
              src={val.team2.teamIconUrl}
              className="size-8 place-self-center"
            ></img>
            <div className="place-self-center text-center text-sm">
              {val.team2.teamName}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Score;
