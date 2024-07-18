import { useEffect, useState } from "react";
import bvb from "../assets/bvb4.jpg";
import { getAllBVBMatchesData } from "../apis/openLigaData.js";
import { getOrCreateBVBMatchByDate } from "../apis/dbAPI.js";
import { getVotesByFixtureID } from "../apis/dbAPI.js";
import Score from "../components/score.jsx";
import Button from "../components/Button.jsx";
import Accordion from "../components/accordion.jsx";
import VoteAccordion from "../components/voteaccordion.jsx";

function Home() {
  const [matches, setMatches] = useState();
  const [selectedMatch, setSelectedMatch] = useState();
  const [hasVoted, setHasVoted] = useState(false);
  const [voteData, setVoteData] = useState("");
  // effect to render the date buttons
  useEffect(() => {
    async function fetchData() {
      const matchData = await getAllBVBMatchesData();
      const selectedBVBMatch = await getOrCreateBVBMatchByDate(
        matchData[0].matchDateTimeUTC.split("T")[0]
      );
      const resp = await getVotesByFixtureID(selectedBVBMatch.fixture.id);
      let voteDataArr = [];
      if (resp?.data) {
        for (const [key, value] of Object.entries(resp.data)) {
          if (value > 0) {
            voteDataArr.push({ id: key, label: key, value: value });
          }
        }
      }
      if (
        selectedBVBMatch &&
        selectedBVBMatch.fixture.periods.second + 172800 <= Date.now()
      ) {
        setHasVoted(true);
      }
      setVoteData(voteDataArr);
      setMatches(matchData);
      setSelectedMatch(selectedBVBMatch);
      const voteData = JSON.parse(localStorage.getItem("hasVoted"));
      if (voteData) {
        if (Object.hasOwn(voteData, selectedBVBMatch.fixture.id)) {
          setHasVoted(voteData[selectedBVBMatch.fixture.id]);
        }
      }
    }
    fetchData();
  }, []);
  function dateComparisonHandler(val) {
    const nowDate = new Date();
    const today =
      nowDate.getFullYear() +
      "/" +
      (nowDate.getMonth() + 1) +
      "/" +
      nowDate.getDate();
    const matchDate = new Date(val.matchDateTime);
    const matchDay =
      matchDate.getFullYear() +
      "/" +
      (matchDate.getMonth() + 1) +
      "/" +
      matchDate.getDate();
    return dateButtonRenderer(today, matchDay, matchDate, val);
  }
  function dateButtonRenderer(today, matchDay, matchDate, val) {
    if (today == matchDay) {
      return <button>Today</button>;
    } else if (selectedMatch.matchID == val.matchID) {
      return (
        <Button
          onClick={() => matchDateButtonHandler(val)}
          id={val.matchID}
          key={val.matchID}
        >
          {matchDate.toLocaleString("en-us", {
            day: "numeric",
            month: "short",
          })}
        </Button>
      );
    } else {
      return (
        <button
          onClick={() => matchDateButtonHandler(val)}
          className="bg-zinc-700 text-white hover:text-yellow-400 hover:border-yellow-400 hover:border-2 active:border-2 active:border-yellow-400 focus:border-2 focus:border-yellow-400 focus:outline-none active:underline focus:underline active:text-yellow-400 focus:text-yellow-400"
          id={val.matchID}
          key={val.matchID}
        >
          {matchDate.toLocaleString("en-us", {
            day: "numeric",
            month: "short",
          })}
        </button>
      );
    }
  }
  async function matchDateButtonHandler(val) {
    const selectedBVBMatch = await getOrCreateBVBMatchByDate(
      val.matchDateTimeUTC.split("T")[0]
    );
    console.log(selectedBVBMatch, "changed inr react");
    setSelectedMatch(selectedBVBMatch);
    if (
      selectedBVBMatch &&
      selectedBVBMatch.fixture.periods.second + 172800 <= Date.now()
    ) {
      const resp = await getVotesByFixtureID(selectedBVBMatch.fixture.id);
      let voteDataArr = [];
      for (const [key, value] of Object.entries(resp.data)) {
        if (value > 0) {
          voteDataArr.push({ id: key, label: key, value: value });
        }
      }
      setVoteData(voteDataArr);
      setHasVoted(true);
    } else {
      setHasVoted(false);
    }
  }
  // console.log(selectedMatch.fixture.periods.second + 172800 <= Date.now());
  console.log(selectedMatch, "matechesss");
  return (
    <>
      <div className="flex flex-col bg-zinc-800 m-2 sm:w-1/3 md:w-1/2">
        <section className="">
          {/* <div className="rounded-2xl"> */}
          <img className=" rounded-xl" src={bvb} alt="BVB Poster" />
          {/* </div> */}
        </section>
        <section className="mt-2 grow min-h-screen">
          {/* <div className="bg-zinc-400 w-3/5">Search Bar</div> */}
          <div className="bg-zinc-700 mt-1">
            <div className="flex flex-row justify-evenly">
              {matches ? (
                matches.map((val) => {
                  return dateComparisonHandler(val);
                })
              ) : (
                <>LOADING</>
              )}
            </div>
          </div>
          {selectedMatch ? (
            <>
              <Score
                selectedMatch={selectedMatch}
                hasVoted={hasVoted}
                setHasVoted={setHasVoted}
                voteData={voteData}
              />
              <Accordion type="data" title="Match Details">
                {selectedMatch.events.filter((evt, idx) => {
                  return evt.type != "Goal";
                })}
              </Accordion>
              <div className="hidden">
                <Accordion
                  type="vote"
                  selectedMatch={selectedMatch}
                  hasVoted={hasVoted}
                  setHasVoted={setHasVoted}
                  voteData={voteData}
                  title="Voting!"
                >
                  {selectedMatch.lineups.filter((lineup) => {
                    return (
                      lineup.team.id == import.meta.env.VITE_APIFOOTBALL_TEAM_ID
                    );
                  })}
                </Accordion>
              </div>
            </>
          ) : (
            <>LOADING</>
          )}
        </section>
      </div>
      <div>
        {selectedMatch ? (
          <div className="hidden sm:flex sm:flex-col sm:bg-zinc-800 sm:mt-1  sm:m-2 md:w-1/4 sm:h-full">
            <span>
              {selectedMatch.league.name} - {selectedMatch.league.round}
            </span>
            <VoteAccordion
              type="vote"
              selectedMatch={selectedMatch}
              hasVoted={hasVoted}
              setHasVoted={setHasVoted}
              voteData={voteData}
            >
              {selectedMatch.lineups.filter((lineup) => {
                return (
                  lineup.team.id == import.meta.env.VITE_APIFOOTBALL_TEAM_ID
                );
              })}
            </VoteAccordion>
          </div>
        ) : (
          <>Ye bhi loading</>
        )}
      </div>
    </>
  );
}

export default Home;
