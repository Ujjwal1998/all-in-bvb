import { useEffect, useState } from "react";
import bvb from "../assets/bvb4.jpg";
import { getAllBVBMatchesData } from "../apis/openLigaData.js";
import { getBVBMatchData } from "../apis/apiSportsData.js";
import Score from "./score.jsx";

function Main() {
  const [matches, setMatches] = useState();
  const [selectedMatch, setSelectedMatch] = useState();
  useEffect(() => {
    async function fetchData() {
      const matchData = await getAllBVBMatchesData();
      // const selectedBVBMatch = await getBVBMatchData(
      // matchData[0].matchDateTimeUTC
      // );
      setMatches(matchData);
      setSelectedMatch({
        fixture: {
          id: 1199389,
          referee: "S. Vinčić",
          timezone: "UTC",
          date: "2024-06-01T19:00:00+00:00",
          timestamp: 1717268400,
          periods: {
            first: 1717268400,
            second: 1717272000,
          },
          venue: {
            id: 489,
            name: "Wembley Stadium",
            city: "London",
          },
          status: {
            long: "Match Finished",
            short: "FT",
            elapsed: 90,
          },
        },
        league: {
          id: 2,
          name: "UEFA Champions League",
          country: "World",
          logo: "https://media.api-sports.io/football/leagues/2.png",
          flag: null,
          season: 2023,
          round: "Final",
        },
        teams: {
          home: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
            winner: false,
          },
          away: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
            winner: true,
          },
        },
        goals: {
          home: 0,
          away: 2,
        },
        score: {
          halftime: {
            home: 0,
            away: 0,
          },
          fulltime: {
            home: 0,
            away: 2,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
        events: [
          {
            time: {
              elapsed: 35,
              extra: null,
            },
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
            },
            player: {
              id: 762,
              name: "Vinícius Júnior",
            },
            assist: {
              id: null,
              name: null,
            },
            type: "Card",
            detail: "Yellow Card",
            comments: "Foul",
          },
          {
            time: {
              elapsed: 40,
              extra: null,
            },
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
            },
            player: {
              id: 26243,
              name: "Nico Schlotterbeck",
            },
            assist: {
              id: null,
              name: null,
            },
            type: "Card",
            detail: "Yellow Card",
            comments: "Argument",
          },
          {
            time: {
              elapsed: 43,
              extra: null,
            },
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
            },
            player: {
              id: 1159,
              name: "Marcel Sabitzer",
            },
            assist: {
              id: null,
              name: null,
            },
            type: "Card",
            detail: "Yellow Card",
            comments: "Argument",
          },
          {
            time: {
              elapsed: 72,
              extra: null,
            },
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
            },
            player: {
              id: 7334,
              name: "K. Adeyemi",
            },
            assist: {
              id: 25,
              name: "M. Reus",
            },
            type: "subst",
            detail: "Substitution 1",
            comments: null,
          },
          {
            time: {
              elapsed: 74,
              extra: null,
            },
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
            },
            player: {
              id: 733,
              name: "Dani Carvajal",
            },
            assist: {
              id: 752,
              name: "T. Kroos",
            },
            type: "Goal",
            detail: "Normal Goal",
            comments: null,
          },
          {
            time: {
              elapsed: 79,
              extra: null,
            },
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
            },
            player: {
              id: 501,
              name: "Mats Hummels",
            },
            assist: {
              id: null,
              name: null,
            },
            type: "Card",
            detail: "Yellow Card",
            comments: "Foul",
          },
          {
            time: {
              elapsed: 80,
              extra: null,
            },
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
            },
            player: {
              id: 984,
              name: "J. Brandt",
            },
            assist: {
              id: 1826,
              name: "S. Haller",
            },
            type: "subst",
            detail: "Substitution 2",
            comments: null,
          },
          {
            time: {
              elapsed: 80,
              extra: null,
            },
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
            },
            player: {
              id: 864,
              name: "E. Can",
            },
            assist: {
              id: 249,
              name: "D. Malen",
            },
            type: "subst",
            detail: "Substitution 3",
            comments: null,
          },
          {
            time: {
              elapsed: 83,
              extra: null,
            },
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
            },
            player: {
              id: 762,
              name: "Vinícius Júnior",
            },
            assist: {
              id: 129718,
              name: "J. Bellingham",
            },
            type: "Goal",
            detail: "Normal Goal",
            comments: null,
          },
          {
            time: {
              elapsed: 85,
              extra: null,
            },
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
            },
            player: {
              id: 129718,
              name: "J. Bellingham",
            },
            assist: {
              id: 18907,
              name: "Joselu",
            },
            type: "subst",
            detail: "Substitution 1",
            comments: null,
          },
          {
            time: {
              elapsed: 86,
              extra: null,
            },
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
            },
            player: {
              id: 752,
              name: "T. Kroos",
            },
            assist: {
              id: 754,
              name: "L. Modrić",
            },
            type: "subst",
            detail: "Substitution 2",
            comments: null,
          },
          {
            time: {
              elapsed: 87,
              extra: null,
            },
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
            },
            player: {
              id: 18,
              name: "J. Sancho",
            },
            assist: {
              id: 286894,
              name: "J. Bynoe-Gittens",
            },
            type: "subst",
            detail: "Substitution 4",
            comments: null,
          },
          {
            time: {
              elapsed: 90,
              extra: 4,
            },
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
            },
            player: {
              id: 762,
              name: "Vinícius Júnior",
            },
            assist: {
              id: 757,
              name: "Lucas Vázquez",
            },
            type: "subst",
            detail: "Substitution 3",
            comments: null,
          },
          {
            time: {
              elapsed: 90,
              extra: null,
            },
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
            },
            player: {
              id: 10009,
              name: "Rodrygo",
            },
            assist: {
              id: 372,
              name: "Éder Militão",
            },
            type: "subst",
            detail: "Substitution 4",
            comments: null,
          },
        ],
        lineups: [
          {
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
              colors: {
                player: {
                  primary: "feda01",
                  number: "000000",
                  border: "feda01",
                },
                goalkeeper: {
                  primary: "fd7729",
                  number: "1a1919",
                  border: "fd7729",
                },
              },
            },
            coach: {
              id: 13491,
              name: "E. Terzić",
              photo: "https://media.api-sports.io/football/coachs/13491.png",
            },
            formation: "4-3-3",
            startXI: [
              {
                player: {
                  id: 25282,
                  name: "G. Kobel",
                  number: 1,
                  pos: "G",
                  grid: "1:1",
                },
              },
              {
                player: {
                  id: 24845,
                  name: "J. Ryerson",
                  number: 26,
                  pos: "D",
                  grid: "2:4",
                },
              },
              {
                player: {
                  id: 501,
                  name: "M. Hummels",
                  number: 15,
                  pos: "D",
                  grid: "2:3",
                },
              },
              {
                player: {
                  id: 26243,
                  name: "N. Schlotterbeck",
                  number: 4,
                  pos: "D",
                  grid: "2:2",
                },
              },
              {
                player: {
                  id: 138816,
                  name: "I. Maatsen",
                  number: 22,
                  pos: "D",
                  grid: "2:1",
                },
              },
              {
                player: {
                  id: 1159,
                  name: "M. Sabitzer",
                  number: 20,
                  pos: "M",
                  grid: "3:3",
                },
              },
              {
                player: {
                  id: 864,
                  name: "E. Can",
                  number: 23,
                  pos: "M",
                  grid: "3:2",
                },
              },
              {
                player: {
                  id: 984,
                  name: "J. Brandt",
                  number: 19,
                  pos: "M",
                  grid: "3:1",
                },
              },
              {
                player: {
                  id: 18,
                  name: "J. Sancho",
                  number: 10,
                  pos: "F",
                  grid: "4:3",
                },
              },
              {
                player: {
                  id: 25391,
                  name: "N. Füllkrug",
                  number: 14,
                  pos: "F",
                  grid: "4:2",
                },
              },
              {
                player: {
                  id: 7334,
                  name: "K. Adeyemi",
                  number: 27,
                  pos: "F",
                  grid: "4:1",
                },
              },
            ],
            substitutes: [
              {
                player: {
                  id: 25,
                  name: "M. Reus",
                  number: 11,
                  pos: "M",
                  grid: null,
                },
              },
              {
                player: {
                  id: 1826,
                  name: "S. Haller",
                  number: 9,
                  pos: "F",
                  grid: null,
                },
              },
              {
                player: {
                  id: 249,
                  name: "D. Malen",
                  number: 21,
                  pos: "F",
                  grid: null,
                },
              },
              {
                player: {
                  id: 286894,
                  name: "J. Bynoe-Gittens",
                  number: 43,
                  pos: "F",
                  grid: null,
                },
              },
              {
                player: {
                  id: 397740,
                  name: "K. Wätjen",
                  number: 38,
                  pos: "M",
                  grid: null,
                },
              },
              {
                player: {
                  id: 506,
                  name: "N. Süle",
                  number: 25,
                  pos: "D",
                  grid: null,
                },
              },
              {
                player: {
                  id: 162502,
                  name: "M. Lotka",
                  number: 35,
                  pos: "G",
                  grid: null,
                },
              },
              {
                player: {
                  id: 26,
                  name: "M. Wolf",
                  number: 17,
                  pos: "M",
                  grid: null,
                },
              },
              {
                player: {
                  id: 24807,
                  name: "S. Özcan",
                  number: 6,
                  pos: "M",
                  grid: null,
                },
              },
              {
                player: {
                  id: 161919,
                  name: "Y. Moukoko",
                  number: 18,
                  pos: "F",
                  grid: null,
                },
              },
              {
                player: {
                  id: 26292,
                  name: "A. Meyer",
                  number: 33,
                  pos: "G",
                  grid: null,
                },
              },
              {
                player: {
                  id: 637,
                  name: "F. Nmecha",
                  number: 8,
                  pos: "M",
                  grid: null,
                },
              },
            ],
          },
          {
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
              colors: {
                player: {
                  primary: "ffffff",
                  number: "000000",
                  border: "ffffff",
                },
                goalkeeper: {
                  primary: "4be438",
                  number: "ffffff",
                  border: "4be438",
                },
              },
            },
            coach: {
              id: 2407,
              name: "C. Ancelotti",
              photo: "https://media.api-sports.io/football/coachs/2407.png",
            },
            formation: "4-3-1-2",
            startXI: [
              {
                player: {
                  id: 730,
                  name: "T. Courtois",
                  number: 1,
                  pos: "G",
                  grid: "1:1",
                },
              },
              {
                player: {
                  id: 733,
                  name: "Dani Carvajal",
                  number: 2,
                  pos: "D",
                  grid: "2:4",
                },
              },
              {
                player: {
                  id: 2285,
                  name: "A. Rüdiger",
                  number: 22,
                  pos: "D",
                  grid: "2:3",
                },
              },
              {
                player: {
                  id: 735,
                  name: "Nacho",
                  number: 6,
                  pos: "D",
                  grid: "2:2",
                },
              },
              {
                player: {
                  id: 653,
                  name: "F. Mendy",
                  number: 23,
                  pos: "D",
                  grid: "2:1",
                },
              },
              {
                player: {
                  id: 756,
                  name: "F. Valverde",
                  number: 15,
                  pos: "M",
                  grid: "3:3",
                },
              },
              {
                player: {
                  id: 2207,
                  name: "E. Camavinga",
                  number: 12,
                  pos: "M",
                  grid: "3:2",
                },
              },
              {
                player: {
                  id: 752,
                  name: "T. Kroos",
                  number: 8,
                  pos: "M",
                  grid: "3:1",
                },
              },
              {
                player: {
                  id: 129718,
                  name: "J. Bellingham",
                  number: 5,
                  pos: "M",
                  grid: "4:1",
                },
              },
              {
                player: {
                  id: 10009,
                  name: "Rodrygo",
                  number: 11,
                  pos: "F",
                  grid: "5:2",
                },
              },
              {
                player: {
                  id: 762,
                  name: "Vinícius Júnior",
                  number: 7,
                  pos: "F",
                  grid: "5:1",
                },
              },
            ],
            substitutes: [
              {
                player: {
                  id: 18907,
                  name: "Joselu",
                  number: 14,
                  pos: "F",
                  grid: null,
                },
              },
              {
                player: {
                  id: 754,
                  name: "L. Modrić",
                  number: 10,
                  pos: "M",
                  grid: null,
                },
              },
              {
                player: {
                  id: 757,
                  name: "Lucas Vázquez",
                  number: 17,
                  pos: "M",
                  grid: null,
                },
              },
              {
                player: {
                  id: 372,
                  name: "Éder Militão",
                  number: 3,
                  pos: "D",
                  grid: null,
                },
              },
              {
                player: {
                  id: 505,
                  name: "D. Alaba",
                  number: 4,
                  pos: "D",
                  grid: null,
                },
              },
              {
                player: {
                  id: 2273,
                  name: "Kepa",
                  number: 25,
                  pos: "G",
                  grid: null,
                },
              },
              {
                player: {
                  id: 744,
                  name: "Brahim Díaz",
                  number: 21,
                  pos: "M",
                  grid: null,
                },
              },
              {
                player: {
                  id: 1271,
                  name: "A. Tchouaméni",
                  number: 18,
                  pos: "M",
                  grid: null,
                },
              },
              {
                player: {
                  id: 47400,
                  name: "A. Lunin",
                  number: 13,
                  pos: "G",
                  grid: null,
                },
              },
              {
                player: {
                  id: 748,
                  name: "Dani Ceballos",
                  number: 19,
                  pos: "M",
                  grid: null,
                },
              },
              {
                player: {
                  id: 736,
                  name: "Fran García",
                  number: 20,
                  pos: "D",
                  grid: null,
                },
              },
              {
                player: {
                  id: 291964,
                  name: "A. Güler",
                  number: 24,
                  pos: "M",
                  grid: null,
                },
              },
            ],
          },
        ],
        statistics: [
          {
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
            },
            statistics: [
              {
                type: "Shots on Goal",
                value: 4,
              },
              {
                type: "Shots off Goal",
                value: 6,
              },
              {
                type: "Total Shots",
                value: 13,
              },
              {
                type: "Blocked Shots",
                value: 3,
              },
              {
                type: "Shots insidebox",
                value: 9,
              },
              {
                type: "Shots outsidebox",
                value: 4,
              },
              {
                type: "Fouls",
                value: 12,
              },
              {
                type: "Corner Kicks",
                value: 9,
              },
              {
                type: "Offsides",
                value: 1,
              },
              {
                type: "Ball Possession",
                value: "43%",
              },
              {
                type: "Yellow Cards",
                value: 3,
              },
              {
                type: "Red Cards",
                value: null,
              },
              {
                type: "Goalkeeper Saves",
                value: 4,
              },
              {
                type: "Total passes",
                value: 403,
              },
              {
                type: "Passes accurate",
                value: 345,
              },
              {
                type: "Passes %",
                value: "86%",
              },
              {
                type: "expected_goals",
                value: "2.08",
              },
              {
                type: "goals_prevented",
                value: 0,
              },
            ],
          },
          {
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
            },
            statistics: [
              {
                type: "Shots on Goal",
                value: 6,
              },
              {
                type: "Shots off Goal",
                value: 5,
              },
              {
                type: "Total Shots",
                value: 13,
              },
              {
                type: "Blocked Shots",
                value: 2,
              },
              {
                type: "Shots insidebox",
                value: 8,
              },
              {
                type: "Shots outsidebox",
                value: 5,
              },
              {
                type: "Fouls",
                value: 8,
              },
              {
                type: "Corner Kicks",
                value: 8,
              },
              {
                type: "Offsides",
                value: 0,
              },
              {
                type: "Ball Possession",
                value: "57%",
              },
              {
                type: "Yellow Cards",
                value: 1,
              },
              {
                type: "Red Cards",
                value: null,
              },
              {
                type: "Goalkeeper Saves",
                value: 3,
              },
              {
                type: "Total passes",
                value: 549,
              },
              {
                type: "Passes accurate",
                value: 503,
              },
              {
                type: "Passes %",
                value: "92%",
              },
              {
                type: "expected_goals",
                value: "1.13",
              },
              {
                type: "goals_prevented",
                value: 0,
              },
            ],
          },
        ],
        players: [
          {
            team: {
              id: 165,
              name: "Borussia Dortmund",
              logo: "https://media.api-sports.io/football/teams/165.png",
              update: "2024-06-03T07:07:49+03:00",
            },
            players: [
              {
                player: {
                  id: 25282,
                  name: "Gregor Kobel",
                  photo:
                    "https://media.api-sports.io/football/players/25282.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 1,
                      position: "G",
                      rating: "7",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 2,
                      assists: 0,
                      saves: 4,
                    },
                    passes: {
                      total: 28,
                      key: null,
                      accuracy: "22",
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 1,
                      won: 1,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: 1,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: 0,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 24845,
                  name: "Julian Ryerson",
                  photo:
                    "https://media.api-sports.io/football/players/24845.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 26,
                      position: "D",
                      rating: "6.2",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 37,
                      key: null,
                      accuracy: "31",
                    },
                    tackles: {
                      total: 3,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 16,
                      won: 5,
                    },
                    dribbles: {
                      attempts: 3,
                      success: 1,
                      past: 5,
                    },
                    fouls: {
                      drawn: null,
                      committed: 2,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 501,
                  name: "Mats Hummels",
                  photo: "https://media.api-sports.io/football/players/501.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 15,
                      position: "D",
                      rating: "7",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 2,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 54,
                      key: 1,
                      accuracy: "52",
                    },
                    tackles: {
                      total: 5,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 12,
                      won: 7,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: 1,
                    },
                    fouls: {
                      drawn: null,
                      committed: 2,
                    },
                    cards: {
                      yellow: 1,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 26243,
                  name: "Nico Schlotterbeck",
                  photo:
                    "https://media.api-sports.io/football/players/26243.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 4,
                      position: "D",
                      rating: "7",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 73,
                      key: null,
                      accuracy: "65",
                    },
                    tackles: {
                      total: 1,
                      blocks: 1,
                      interceptions: null,
                    },
                    duels: {
                      total: 6,
                      won: 3,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 1,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 138816,
                  name: "Ian Maatsen",
                  photo:
                    "https://media.api-sports.io/football/players/138816.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 22,
                      position: "D",
                      rating: "6.9",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 27,
                      key: 1,
                      accuracy: "23",
                    },
                    tackles: {
                      total: 5,
                      blocks: 1,
                      interceptions: 2,
                    },
                    duels: {
                      total: 12,
                      won: 7,
                    },
                    dribbles: {
                      attempts: 2,
                      success: 2,
                      past: 2,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 1159,
                  name: "Marcel Sabitzer",
                  photo:
                    "https://media.api-sports.io/football/players/1159.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 20,
                      position: "M",
                      rating: "6.6",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 1,
                      on: 1,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 36,
                      key: 1,
                      accuracy: "29",
                    },
                    tackles: {
                      total: 1,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 7,
                      won: 3,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: 2,
                      committed: 2,
                    },
                    cards: {
                      yellow: 1,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 864,
                  name: "Emre Can",
                  photo: "https://media.api-sports.io/football/players/864.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 80,
                      number: 23,
                      position: "M",
                      rating: "6.3",
                      captain: true,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 49,
                      key: null,
                      accuracy: "46",
                    },
                    tackles: {
                      total: 1,
                      blocks: null,
                      interceptions: 1,
                    },
                    duels: {
                      total: 5,
                      won: 1,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: 1,
                    },
                    fouls: {
                      drawn: null,
                      committed: 2,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 984,
                  name: "Julian Brandt",
                  photo: "https://media.api-sports.io/football/players/984.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 80,
                      number: 19,
                      position: "M",
                      rating: "7.3",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 1,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 31,
                      key: 4,
                      accuracy: "26",
                    },
                    tackles: {
                      total: 1,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 6,
                      won: 2,
                    },
                    dribbles: {
                      attempts: 3,
                      success: 1,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 18,
                  name: "Jadon Sancho",
                  photo: "https://media.api-sports.io/football/players/18.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 87,
                      number: 10,
                      position: "F",
                      rating: "6.7",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 31,
                      key: null,
                      accuracy: "26",
                    },
                    tackles: {
                      total: 1,
                      blocks: null,
                      interceptions: 1,
                    },
                    duels: {
                      total: 8,
                      won: 3,
                    },
                    dribbles: {
                      attempts: 3,
                      success: 1,
                      past: 1,
                    },
                    fouls: {
                      drawn: 1,
                      committed: 2,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 25391,
                  name: "Niclas Füllkrug",
                  photo:
                    "https://media.api-sports.io/football/players/25391.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 14,
                      position: "F",
                      rating: "6.2",
                      captain: false,
                      substitute: false,
                    },
                    offsides: 1,
                    shots: {
                      total: 4,
                      on: 1,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 17,
                      key: 2,
                      accuracy: "11",
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 13,
                      won: 6,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: 1,
                      committed: 2,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 7334,
                  name: "Karim Adeyemi",
                  photo:
                    "https://media.api-sports.io/football/players/7334.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 72,
                      number: 27,
                      position: "F",
                      rating: "7.3",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 2,
                      on: 2,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 7,
                      key: 1,
                      accuracy: "5",
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: 2,
                    },
                    duels: {
                      total: 5,
                      won: 3,
                    },
                    dribbles: {
                      attempts: 3,
                      success: 1,
                      past: null,
                    },
                    fouls: {
                      drawn: 1,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 25,
                  name: "Marco Reus",
                  photo: "https://media.api-sports.io/football/players/25.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 18,
                      number: 11,
                      position: "M",
                      rating: "6.3",
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 6,
                      key: null,
                      accuracy: "5",
                    },
                    tackles: {
                      total: 1,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 1,
                      won: 1,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 1826,
                  name: "Sébastien Haller",
                  photo:
                    "https://media.api-sports.io/football/players/1826.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 10,
                      number: 9,
                      position: "F",
                      rating: "6.3",
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 4,
                      key: null,
                      accuracy: "3",
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 249,
                  name: "Donyell Malen",
                  photo: "https://media.api-sports.io/football/players/249.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 10,
                      number: 21,
                      position: "F",
                      rating: "6.3",
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 1,
                      key: null,
                      accuracy: "1",
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 2,
                      won: 1,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: 1,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 286894,
                  name: "Jamie Bynoe-Gittens",
                  photo:
                    "https://media.api-sports.io/football/players/286894.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 9,
                      number: 43,
                      position: "F",
                      rating: "6.7",
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 2,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 1,
                      won: 1,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: 1,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 162502,
                  name: "Marcel Lotka",
                  photo:
                    "https://media.api-sports.io/football/players/162502.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 35,
                      position: "G",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 26292,
                  name: "Alexander Meyer",
                  photo:
                    "https://media.api-sports.io/football/players/26292.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 33,
                      position: "G",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 506,
                  name: "Niklas Süle",
                  photo: "https://media.api-sports.io/football/players/506.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 25,
                      position: "D",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 26,
                  name: "Marius Wolf",
                  photo: "https://media.api-sports.io/football/players/26.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 17,
                      position: "M",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 637,
                  name: "Felix Nmecha",
                  photo: "https://media.api-sports.io/football/players/637.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 8,
                      position: "M",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 397740,
                  name: "Kjell Wätjen",
                  photo:
                    "https://media.api-sports.io/football/players/397740.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 38,
                      position: "M",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 24807,
                  name: "Salih Özcan",
                  photo:
                    "https://media.api-sports.io/football/players/24807.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 6,
                      position: "M",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 161919,
                  name: "Youssoufa Moukoko",
                  photo:
                    "https://media.api-sports.io/football/players/161919.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 18,
                      position: "F",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
            ],
          },
          {
            team: {
              id: 541,
              name: "Real Madrid",
              logo: "https://media.api-sports.io/football/teams/541.png",
              update: "2024-06-03T07:07:49+03:00",
            },
            players: [
              {
                player: {
                  id: 730,
                  name: "Thibaut Courtois",
                  photo: "https://media.api-sports.io/football/players/730.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 1,
                      position: "G",
                      rating: "7.3",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: 3,
                    },
                    passes: {
                      total: 18,
                      key: null,
                      accuracy: "14",
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 2,
                      won: 1,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: 1,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: 0,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 733,
                  name: "Daniel Carvajal",
                  photo: "https://media.api-sports.io/football/players/733.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 2,
                      position: "D",
                      rating: "8.3",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 2,
                      on: 1,
                    },
                    goals: {
                      total: 1,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 50,
                      key: null,
                      accuracy: "41",
                    },
                    tackles: {
                      total: 1,
                      blocks: 1,
                      interceptions: null,
                    },
                    duels: {
                      total: 6,
                      won: 3,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: 1,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 2285,
                  name: "Antonio Rüdiger",
                  photo:
                    "https://media.api-sports.io/football/players/2285.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 22,
                      position: "D",
                      rating: "7.2",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 77,
                      key: null,
                      accuracy: "74",
                    },
                    tackles: {
                      total: 1,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 5,
                      won: 2,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: 1,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 735,
                  name: "Nacho Fernández",
                  photo: "https://media.api-sports.io/football/players/735.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 6,
                      position: "D",
                      rating: "7.2",
                      captain: true,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 1,
                      on: 1,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 60,
                      key: null,
                      accuracy: "58",
                    },
                    tackles: {
                      total: 1,
                      blocks: null,
                      interceptions: 3,
                    },
                    duels: {
                      total: 5,
                      won: 1,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: 1,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 653,
                  name: "Ferland Mendy",
                  photo: "https://media.api-sports.io/football/players/653.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 23,
                      position: "D",
                      rating: "7.3",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 45,
                      key: null,
                      accuracy: "45",
                    },
                    tackles: {
                      total: 3,
                      blocks: null,
                      interceptions: 1,
                    },
                    duels: {
                      total: 8,
                      won: 7,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: 3,
                      committed: 1,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 756,
                  name: "Federico Valverde",
                  photo: "https://media.api-sports.io/football/players/756.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 15,
                      position: "M",
                      rating: "6.9",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 2,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 52,
                      key: 1,
                      accuracy: "49",
                    },
                    tackles: {
                      total: 1,
                      blocks: 1,
                      interceptions: null,
                    },
                    duels: {
                      total: 7,
                      won: 2,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: 2,
                    },
                    fouls: {
                      drawn: null,
                      committed: 2,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 2207,
                  name: "Eduardo Camavinga",
                  photo:
                    "https://media.api-sports.io/football/players/2207.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 90,
                      number: 12,
                      position: "M",
                      rating: "7.6",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 1,
                      on: 1,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 63,
                      key: 1,
                      accuracy: "57",
                    },
                    tackles: {
                      total: 1,
                      blocks: 2,
                      interceptions: null,
                    },
                    duels: {
                      total: 11,
                      won: 7,
                    },
                    dribbles: {
                      attempts: 1,
                      success: 1,
                      past: null,
                    },
                    fouls: {
                      drawn: 2,
                      committed: 1,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 752,
                  name: "Toni Kroos",
                  photo: "https://media.api-sports.io/football/players/752.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 86,
                      number: 8,
                      position: "M",
                      rating: "8.3",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 2,
                      on: 2,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 1,
                      saves: null,
                    },
                    passes: {
                      total: 94,
                      key: 4,
                      accuracy: "91",
                    },
                    tackles: {
                      total: 2,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 3,
                      won: 2,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: 1,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 129718,
                  name: "Jude Bellingham",
                  photo:
                    "https://media.api-sports.io/football/players/129718.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 85,
                      number: 5,
                      position: "M",
                      rating: "7.7",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 1,
                      saves: null,
                    },
                    passes: {
                      total: 35,
                      key: 3,
                      accuracy: "30",
                    },
                    tackles: {
                      total: 2,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 11,
                      won: 7,
                    },
                    dribbles: {
                      attempts: 1,
                      success: null,
                      past: 1,
                    },
                    fouls: {
                      drawn: 3,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 10009,
                  name: "Rodrygo",
                  photo:
                    "https://media.api-sports.io/football/players/10009.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 89,
                      number: 11,
                      position: "F",
                      rating: "6.2",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 17,
                      key: null,
                      accuracy: "15",
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 9,
                      won: 1,
                    },
                    dribbles: {
                      attempts: 5,
                      success: 1,
                      past: 1,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 762,
                  name: "Vinícius Júnior",
                  photo: "https://media.api-sports.io/football/players/762.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 89,
                      number: 7,
                      position: "F",
                      rating: "7.9",
                      captain: false,
                      substitute: false,
                    },
                    offsides: null,
                    shots: {
                      total: 3,
                      on: 1,
                    },
                    goals: {
                      total: 1,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 27,
                      key: null,
                      accuracy: "21",
                    },
                    tackles: {
                      total: 1,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 23,
                      won: 14,
                    },
                    dribbles: {
                      attempts: 13,
                      success: 8,
                      past: null,
                    },
                    fouls: {
                      drawn: 3,
                      committed: 1,
                    },
                    cards: {
                      yellow: 1,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 18907,
                  name: "Joselu",
                  photo:
                    "https://media.api-sports.io/football/players/18907.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 11,
                      number: 14,
                      position: "F",
                      rating: "6.3",
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 3,
                      key: null,
                      accuracy: "1",
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 1,
                      won: 1,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 754,
                  name: "Luka Modrić",
                  photo: "https://media.api-sports.io/football/players/754.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 10,
                      number: 10,
                      position: "M",
                      rating: "6.3",
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: 8,
                      key: null,
                      accuracy: "7",
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 2,
                      won: 1,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: 1,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 757,
                  name: "Lucas Vázquez",
                  photo: "https://media.api-sports.io/football/players/757.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 1,
                      number: 17,
                      position: "M",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 372,
                  name: "Éder Militão",
                  photo: "https://media.api-sports.io/football/players/372.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: 1,
                      number: 3,
                      position: "D",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: 0,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: 1,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: 2,
                      won: 2,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 2273,
                  name: "Kepa Arrizabalaga",
                  photo:
                    "https://media.api-sports.io/football/players/2273.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 25,
                      position: "G",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 47400,
                  name: "Andriy Lunin",
                  photo:
                    "https://media.api-sports.io/football/players/47400.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 13,
                      position: "G",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 736,
                  name: "Fran García",
                  photo: "https://media.api-sports.io/football/players/736.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 20,
                      position: "D",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 505,
                  name: "David Alaba",
                  photo: "https://media.api-sports.io/football/players/505.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 4,
                      position: "D",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 748,
                  name: "Dani Ceballos",
                  photo: "https://media.api-sports.io/football/players/748.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 19,
                      position: "M",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 744,
                  name: "Brahim Díaz",
                  photo: "https://media.api-sports.io/football/players/744.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 21,
                      position: "M",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 1271,
                  name: "Aurélien Tchouaméni",
                  photo:
                    "https://media.api-sports.io/football/players/1271.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 18,
                      position: "M",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
              {
                player: {
                  id: 291964,
                  name: "Arda Güler",
                  photo:
                    "https://media.api-sports.io/football/players/291964.png",
                },
                statistics: [
                  {
                    games: {
                      minutes: null,
                      number: 24,
                      position: "M",
                      rating: null,
                      captain: false,
                      substitute: true,
                    },
                    offsides: null,
                    shots: {
                      total: null,
                      on: null,
                    },
                    goals: {
                      total: null,
                      conceded: 0,
                      assists: null,
                      saves: null,
                    },
                    passes: {
                      total: null,
                      key: null,
                      accuracy: null,
                    },
                    tackles: {
                      total: null,
                      blocks: null,
                      interceptions: null,
                    },
                    duels: {
                      total: null,
                      won: null,
                    },
                    dribbles: {
                      attempts: null,
                      success: null,
                      past: null,
                    },
                    fouls: {
                      drawn: null,
                      committed: null,
                    },
                    cards: {
                      yellow: 0,
                      red: 0,
                    },
                    penalty: {
                      won: null,
                      commited: null,
                      scored: 0,
                      missed: 0,
                      saved: null,
                    },
                  },
                ],
              },
            ],
          },
        ],
      });
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
        <button
          onClick={() => matchDateButtonHandler(val)}
          className="bg-zinc-700 text-yellow-400 border-yellow-400 focus:outline-none active:underline focus:underline active:outline-none focus:border-yellow-400"
          id={val.matchID}
          key={val.matchID}
        >
          {matchDate.toLocaleString("en-us", {
            day: "numeric",
            month: "short",
          })}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => matchDateButtonHandler(val)}
          className="bg-zinc-700 text-white hover:text-yellow-400 hover:border-yellow-400 hover:border-2 active:border-2 active:border-yellow-400 focus:border-2 focus:border-yellow-400 focus:outline-none active:underline focus:underline active:text-yellow-400 focus:text-yellow-400"
          id={val.matchID}
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
    // const selectedBVBMatch = await getBVBMatchData(val.matchDateTimeUTC);
    setSelectedMatch({
      fixture: {
        id: 1199389,
        referee: "S. Vinčić",
        timezone: "UTC",
        date: "2024-06-01T19:00:00+00:00",
        timestamp: 1717268400,
        periods: {
          first: 1717268400,
          second: 1717272000,
        },
        venue: {
          id: 489,
          name: "Wembley Stadium",
          city: "London",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 2,
        name: "UEFA Champions League",
        country: "World",
        logo: "https://media.api-sports.io/football/leagues/2.png",
        flag: null,
        season: 2023,
        round: "Final",
      },
      teams: {
        home: {
          id: 165,
          name: "Borussia Dortmund",
          logo: "https://media.api-sports.io/football/teams/165.png",
          winner: false,
        },
        away: {
          id: 541,
          name: "Real Madrid",
          logo: "https://media.api-sports.io/football/teams/541.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 2,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 0,
          away: 2,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 35,
            extra: null,
          },
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
          },
          player: {
            id: 762,
            name: "Vinícius Júnior",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: {
            elapsed: 40,
            extra: null,
          },
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
          },
          player: {
            id: 26243,
            name: "Nico Schlotterbeck",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Argument",
        },
        {
          time: {
            elapsed: 43,
            extra: null,
          },
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
          },
          player: {
            id: 1159,
            name: "Marcel Sabitzer",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Argument",
        },
        {
          time: {
            elapsed: 72,
            extra: null,
          },
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
          },
          player: {
            id: 7334,
            name: "K. Adeyemi",
          },
          assist: {
            id: 25,
            name: "M. Reus",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 74,
            extra: null,
          },
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
          },
          player: {
            id: 733,
            name: "Dani Carvajal",
          },
          assist: {
            id: 752,
            name: "T. Kroos",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 79,
            extra: null,
          },
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
          },
          player: {
            id: 501,
            name: "Mats Hummels",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: {
            elapsed: 80,
            extra: null,
          },
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
          },
          player: {
            id: 984,
            name: "J. Brandt",
          },
          assist: {
            id: 1826,
            name: "S. Haller",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 80,
            extra: null,
          },
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
          },
          player: {
            id: 864,
            name: "E. Can",
          },
          assist: {
            id: 249,
            name: "D. Malen",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 83,
            extra: null,
          },
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
          },
          player: {
            id: 762,
            name: "Vinícius Júnior",
          },
          assist: {
            id: 129718,
            name: "J. Bellingham",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 85,
            extra: null,
          },
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
          },
          player: {
            id: 129718,
            name: "J. Bellingham",
          },
          assist: {
            id: 18907,
            name: "Joselu",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 86,
            extra: null,
          },
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
          },
          player: {
            id: 752,
            name: "T. Kroos",
          },
          assist: {
            id: 754,
            name: "L. Modrić",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 87,
            extra: null,
          },
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
          },
          player: {
            id: 18,
            name: "J. Sancho",
          },
          assist: {
            id: 286894,
            name: "J. Bynoe-Gittens",
          },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 4,
          },
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
          },
          player: {
            id: 762,
            name: "Vinícius Júnior",
          },
          assist: {
            id: 757,
            name: "Lucas Vázquez",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: null,
          },
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
          },
          player: {
            id: 10009,
            name: "Rodrygo",
          },
          assist: {
            id: 372,
            name: "Éder Militão",
          },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
      ],
      lineups: [
        {
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
            colors: {
              player: {
                primary: "feda01",
                number: "000000",
                border: "feda01",
              },
              goalkeeper: {
                primary: "fd7729",
                number: "1a1919",
                border: "fd7729",
              },
            },
          },
          coach: {
            id: 13491,
            name: "E. Terzić",
            photo: "https://media.api-sports.io/football/coachs/13491.png",
          },
          formation: "4-3-3",
          startXI: [
            {
              player: {
                id: 25282,
                name: "G. Kobel",
                number: 1,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 24845,
                name: "J. Ryerson",
                number: 26,
                pos: "D",
                grid: "2:4",
              },
            },
            {
              player: {
                id: 501,
                name: "M. Hummels",
                number: 15,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 26243,
                name: "N. Schlotterbeck",
                number: 4,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 138816,
                name: "I. Maatsen",
                number: 22,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 1159,
                name: "M. Sabitzer",
                number: 20,
                pos: "M",
                grid: "3:3",
              },
            },
            {
              player: {
                id: 864,
                name: "E. Can",
                number: 23,
                pos: "M",
                grid: "3:2",
              },
            },
            {
              player: {
                id: 984,
                name: "J. Brandt",
                number: 19,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 18,
                name: "J. Sancho",
                number: 10,
                pos: "F",
                grid: "4:3",
              },
            },
            {
              player: {
                id: 25391,
                name: "N. Füllkrug",
                number: 14,
                pos: "F",
                grid: "4:2",
              },
            },
            {
              player: {
                id: 7334,
                name: "K. Adeyemi",
                number: 27,
                pos: "F",
                grid: "4:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 25,
                name: "M. Reus",
                number: 11,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 1826,
                name: "S. Haller",
                number: 9,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 249,
                name: "D. Malen",
                number: 21,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 286894,
                name: "J. Bynoe-Gittens",
                number: 43,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 397740,
                name: "K. Wätjen",
                number: 38,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 506,
                name: "N. Süle",
                number: 25,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 162502,
                name: "M. Lotka",
                number: 35,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 26,
                name: "M. Wolf",
                number: 17,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 24807,
                name: "S. Özcan",
                number: 6,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 161919,
                name: "Y. Moukoko",
                number: 18,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 26292,
                name: "A. Meyer",
                number: 33,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 637,
                name: "F. Nmecha",
                number: 8,
                pos: "M",
                grid: null,
              },
            },
          ],
        },
        {
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
            colors: {
              player: {
                primary: "ffffff",
                number: "000000",
                border: "ffffff",
              },
              goalkeeper: {
                primary: "4be438",
                number: "ffffff",
                border: "4be438",
              },
            },
          },
          coach: {
            id: 2407,
            name: "C. Ancelotti",
            photo: "https://media.api-sports.io/football/coachs/2407.png",
          },
          formation: "4-3-1-2",
          startXI: [
            {
              player: {
                id: 730,
                name: "T. Courtois",
                number: 1,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 733,
                name: "Dani Carvajal",
                number: 2,
                pos: "D",
                grid: "2:4",
              },
            },
            {
              player: {
                id: 2285,
                name: "A. Rüdiger",
                number: 22,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 735,
                name: "Nacho",
                number: 6,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 653,
                name: "F. Mendy",
                number: 23,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 756,
                name: "F. Valverde",
                number: 15,
                pos: "M",
                grid: "3:3",
              },
            },
            {
              player: {
                id: 2207,
                name: "E. Camavinga",
                number: 12,
                pos: "M",
                grid: "3:2",
              },
            },
            {
              player: {
                id: 752,
                name: "T. Kroos",
                number: 8,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 129718,
                name: "J. Bellingham",
                number: 5,
                pos: "M",
                grid: "4:1",
              },
            },
            {
              player: {
                id: 10009,
                name: "Rodrygo",
                number: 11,
                pos: "F",
                grid: "5:2",
              },
            },
            {
              player: {
                id: 762,
                name: "Vinícius Júnior",
                number: 7,
                pos: "F",
                grid: "5:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 18907,
                name: "Joselu",
                number: 14,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 754,
                name: "L. Modrić",
                number: 10,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 757,
                name: "Lucas Vázquez",
                number: 17,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 372,
                name: "Éder Militão",
                number: 3,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 505,
                name: "D. Alaba",
                number: 4,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 2273,
                name: "Kepa",
                number: 25,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 744,
                name: "Brahim Díaz",
                number: 21,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 1271,
                name: "A. Tchouaméni",
                number: 18,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 47400,
                name: "A. Lunin",
                number: 13,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 748,
                name: "Dani Ceballos",
                number: 19,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 736,
                name: "Fran García",
                number: 20,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 291964,
                name: "A. Güler",
                number: 24,
                pos: "M",
                grid: null,
              },
            },
          ],
        },
      ],
      statistics: [
        {
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
          },
          statistics: [
            {
              type: "Shots on Goal",
              value: 4,
            },
            {
              type: "Shots off Goal",
              value: 6,
            },
            {
              type: "Total Shots",
              value: 13,
            },
            {
              type: "Blocked Shots",
              value: 3,
            },
            {
              type: "Shots insidebox",
              value: 9,
            },
            {
              type: "Shots outsidebox",
              value: 4,
            },
            {
              type: "Fouls",
              value: 12,
            },
            {
              type: "Corner Kicks",
              value: 9,
            },
            {
              type: "Offsides",
              value: 1,
            },
            {
              type: "Ball Possession",
              value: "43%",
            },
            {
              type: "Yellow Cards",
              value: 3,
            },
            {
              type: "Red Cards",
              value: null,
            },
            {
              type: "Goalkeeper Saves",
              value: 4,
            },
            {
              type: "Total passes",
              value: 403,
            },
            {
              type: "Passes accurate",
              value: 345,
            },
            {
              type: "Passes %",
              value: "86%",
            },
            {
              type: "expected_goals",
              value: "2.08",
            },
            {
              type: "goals_prevented",
              value: 0,
            },
          ],
        },
        {
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
          },
          statistics: [
            {
              type: "Shots on Goal",
              value: 6,
            },
            {
              type: "Shots off Goal",
              value: 5,
            },
            {
              type: "Total Shots",
              value: 13,
            },
            {
              type: "Blocked Shots",
              value: 2,
            },
            {
              type: "Shots insidebox",
              value: 8,
            },
            {
              type: "Shots outsidebox",
              value: 5,
            },
            {
              type: "Fouls",
              value: 8,
            },
            {
              type: "Corner Kicks",
              value: 8,
            },
            {
              type: "Offsides",
              value: 0,
            },
            {
              type: "Ball Possession",
              value: "57%",
            },
            {
              type: "Yellow Cards",
              value: 1,
            },
            {
              type: "Red Cards",
              value: null,
            },
            {
              type: "Goalkeeper Saves",
              value: 3,
            },
            {
              type: "Total passes",
              value: 549,
            },
            {
              type: "Passes accurate",
              value: 503,
            },
            {
              type: "Passes %",
              value: "92%",
            },
            {
              type: "expected_goals",
              value: "1.13",
            },
            {
              type: "goals_prevented",
              value: 0,
            },
          ],
        },
      ],
      players: [
        {
          team: {
            id: 165,
            name: "Borussia Dortmund",
            logo: "https://media.api-sports.io/football/teams/165.png",
            update: "2024-06-03T07:07:49+03:00",
          },
          players: [
            {
              player: {
                id: 25282,
                name: "Gregor Kobel",
                photo: "https://media.api-sports.io/football/players/25282.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 1,
                    position: "G",
                    rating: "7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 2,
                    assists: 0,
                    saves: 4,
                  },
                  passes: {
                    total: 28,
                    key: null,
                    accuracy: "22",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 1,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 24845,
                name: "Julian Ryerson",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 26,
                    position: "D",
                    rating: "6.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 37,
                    key: null,
                    accuracy: "31",
                  },
                  tackles: {
                    total: 3,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 16,
                    won: 5,
                  },
                  dribbles: {
                    attempts: 3,
                    success: 1,
                    past: 5,
                  },
                  fouls: {
                    drawn: null,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 501,
                name: "Mats Hummels",
                photo: "https://media.api-sports.io/football/players/501.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 15,
                    position: "D",
                    rating: "7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 54,
                    key: 1,
                    accuracy: "52",
                  },
                  tackles: {
                    total: 5,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 12,
                    won: 7,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: 2,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 26243,
                name: "Nico Schlotterbeck",
                photo: "https://media.api-sports.io/football/players/26243.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 4,
                    position: "D",
                    rating: "7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 73,
                    key: null,
                    accuracy: "65",
                  },
                  tackles: {
                    total: 1,
                    blocks: 1,
                    interceptions: null,
                  },
                  duels: {
                    total: 6,
                    won: 3,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 138816,
                name: "Ian Maatsen",
                photo:
                  "https://media.api-sports.io/football/players/138816.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 22,
                    position: "D",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 27,
                    key: 1,
                    accuracy: "23",
                  },
                  tackles: {
                    total: 5,
                    blocks: 1,
                    interceptions: 2,
                  },
                  duels: {
                    total: 12,
                    won: 7,
                  },
                  dribbles: {
                    attempts: 2,
                    success: 2,
                    past: 2,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1159,
                name: "Marcel Sabitzer",
                photo: "https://media.api-sports.io/football/players/1159.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 20,
                    position: "M",
                    rating: "6.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 36,
                    key: 1,
                    accuracy: "29",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 7,
                    won: 3,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 2,
                    committed: 2,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 864,
                name: "Emre Can",
                photo: "https://media.api-sports.io/football/players/864.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 80,
                    number: 23,
                    position: "M",
                    rating: "6.3",
                    captain: true,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 49,
                    key: null,
                    accuracy: "46",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 5,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 984,
                name: "Julian Brandt",
                photo: "https://media.api-sports.io/football/players/984.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 80,
                    number: 19,
                    position: "M",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 31,
                    key: 4,
                    accuracy: "26",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 6,
                    won: 2,
                  },
                  dribbles: {
                    attempts: 3,
                    success: 1,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18,
                name: "Jadon Sancho",
                photo: "https://media.api-sports.io/football/players/18.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 87,
                    number: 10,
                    position: "F",
                    rating: "6.7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 31,
                    key: null,
                    accuracy: "26",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 8,
                    won: 3,
                  },
                  dribbles: {
                    attempts: 3,
                    success: 1,
                    past: 1,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 25391,
                name: "Niclas Füllkrug",
                photo: "https://media.api-sports.io/football/players/25391.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 14,
                    position: "F",
                    rating: "6.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: 1,
                  shots: {
                    total: 4,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 17,
                    key: 2,
                    accuracy: "11",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 13,
                    won: 6,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 7334,
                name: "Karim Adeyemi",
                photo: "https://media.api-sports.io/football/players/7334.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 72,
                    number: 27,
                    position: "F",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: 2,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 7,
                    key: 1,
                    accuracy: "5",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 2,
                  },
                  duels: {
                    total: 5,
                    won: 3,
                  },
                  dribbles: {
                    attempts: 3,
                    success: 1,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 25,
                name: "Marco Reus",
                photo: "https://media.api-sports.io/football/players/25.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 18,
                    number: 11,
                    position: "M",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 6,
                    key: null,
                    accuracy: "5",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 1,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1826,
                name: "Sébastien Haller",
                photo: "https://media.api-sports.io/football/players/1826.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 10,
                    number: 9,
                    position: "F",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 4,
                    key: null,
                    accuracy: "3",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 249,
                name: "Donyell Malen",
                photo: "https://media.api-sports.io/football/players/249.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 10,
                    number: 21,
                    position: "F",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 1,
                    key: null,
                    accuracy: "1",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 2,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 286894,
                name: "Jamie Bynoe-Gittens",
                photo:
                  "https://media.api-sports.io/football/players/286894.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 9,
                    number: 43,
                    position: "F",
                    rating: "6.7",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 2,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 1,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 162502,
                name: "Marcel Lotka",
                photo:
                  "https://media.api-sports.io/football/players/162502.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 35,
                    position: "G",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 26292,
                name: "Alexander Meyer",
                photo: "https://media.api-sports.io/football/players/26292.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 33,
                    position: "G",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 506,
                name: "Niklas Süle",
                photo: "https://media.api-sports.io/football/players/506.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 25,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 26,
                name: "Marius Wolf",
                photo: "https://media.api-sports.io/football/players/26.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 17,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 637,
                name: "Felix Nmecha",
                photo: "https://media.api-sports.io/football/players/637.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 8,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 397740,
                name: "Kjell Wätjen",
                photo:
                  "https://media.api-sports.io/football/players/397740.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 38,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 24807,
                name: "Salih Özcan",
                photo: "https://media.api-sports.io/football/players/24807.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 6,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 161919,
                name: "Youssoufa Moukoko",
                photo:
                  "https://media.api-sports.io/football/players/161919.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 18,
                    position: "F",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
          ],
        },
        {
          team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
            update: "2024-06-03T07:07:49+03:00",
          },
          players: [
            {
              player: {
                id: 730,
                name: "Thibaut Courtois",
                photo: "https://media.api-sports.io/football/players/730.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 1,
                    position: "G",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: 3,
                  },
                  passes: {
                    total: 18,
                    key: null,
                    accuracy: "14",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 2,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 733,
                name: "Daniel Carvajal",
                photo: "https://media.api-sports.io/football/players/733.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 2,
                    position: "D",
                    rating: "8.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: 1,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 50,
                    key: null,
                    accuracy: "41",
                  },
                  tackles: {
                    total: 1,
                    blocks: 1,
                    interceptions: null,
                  },
                  duels: {
                    total: 6,
                    won: 3,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2285,
                name: "Antonio Rüdiger",
                photo: "https://media.api-sports.io/football/players/2285.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 22,
                    position: "D",
                    rating: "7.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 77,
                    key: null,
                    accuracy: "74",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 5,
                    won: 2,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 735,
                name: "Nacho Fernández",
                photo: "https://media.api-sports.io/football/players/735.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 6,
                    position: "D",
                    rating: "7.2",
                    captain: true,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 60,
                    key: null,
                    accuracy: "58",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: 3,
                  },
                  duels: {
                    total: 5,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 653,
                name: "Ferland Mendy",
                photo: "https://media.api-sports.io/football/players/653.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 23,
                    position: "D",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 45,
                    key: null,
                    accuracy: "45",
                  },
                  tackles: {
                    total: 3,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 8,
                    won: 7,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 3,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 756,
                name: "Federico Valverde",
                photo: "https://media.api-sports.io/football/players/756.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 15,
                    position: "M",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 52,
                    key: 1,
                    accuracy: "49",
                  },
                  tackles: {
                    total: 1,
                    blocks: 1,
                    interceptions: null,
                  },
                  duels: {
                    total: 7,
                    won: 2,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 2,
                  },
                  fouls: {
                    drawn: null,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2207,
                name: "Eduardo Camavinga",
                photo: "https://media.api-sports.io/football/players/2207.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 12,
                    position: "M",
                    rating: "7.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 63,
                    key: 1,
                    accuracy: "57",
                  },
                  tackles: {
                    total: 1,
                    blocks: 2,
                    interceptions: null,
                  },
                  duels: {
                    total: 11,
                    won: 7,
                  },
                  dribbles: {
                    attempts: 1,
                    success: 1,
                    past: null,
                  },
                  fouls: {
                    drawn: 2,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 752,
                name: "Toni Kroos",
                photo: "https://media.api-sports.io/football/players/752.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 86,
                    number: 8,
                    position: "M",
                    rating: "8.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: 2,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 94,
                    key: 4,
                    accuracy: "91",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 3,
                    won: 2,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 129718,
                name: "Jude Bellingham",
                photo:
                  "https://media.api-sports.io/football/players/129718.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 85,
                    number: 5,
                    position: "M",
                    rating: "7.7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 35,
                    key: 3,
                    accuracy: "30",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 11,
                    won: 7,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: 3,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 10009,
                name: "Rodrygo",
                photo: "https://media.api-sports.io/football/players/10009.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 89,
                    number: 11,
                    position: "F",
                    rating: "6.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 17,
                    key: null,
                    accuracy: "15",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 9,
                    won: 1,
                  },
                  dribbles: {
                    attempts: 5,
                    success: 1,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 762,
                name: "Vinícius Júnior",
                photo: "https://media.api-sports.io/football/players/762.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 89,
                    number: 7,
                    position: "F",
                    rating: "7.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 3,
                    on: 1,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 27,
                    key: null,
                    accuracy: "21",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 23,
                    won: 14,
                  },
                  dribbles: {
                    attempts: 13,
                    success: 8,
                    past: null,
                  },
                  fouls: {
                    drawn: 3,
                    committed: 1,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18907,
                name: "Joselu",
                photo: "https://media.api-sports.io/football/players/18907.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 11,
                    number: 14,
                    position: "F",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 3,
                    key: null,
                    accuracy: "1",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 1,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 754,
                name: "Luka Modrić",
                photo: "https://media.api-sports.io/football/players/754.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 10,
                    number: 10,
                    position: "M",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: 8,
                    key: null,
                    accuracy: "7",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 2,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 757,
                name: "Lucas Vázquez",
                photo: "https://media.api-sports.io/football/players/757.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 1,
                    number: 17,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 372,
                name: "Éder Militão",
                photo: "https://media.api-sports.io/football/players/372.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 1,
                    number: 3,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 0,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 2,
                    won: 2,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2273,
                name: "Kepa Arrizabalaga",
                photo: "https://media.api-sports.io/football/players/2273.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 25,
                    position: "G",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 47400,
                name: "Andriy Lunin",
                photo: "https://media.api-sports.io/football/players/47400.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 13,
                    position: "G",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 736,
                name: "Fran García",
                photo: "https://media.api-sports.io/football/players/736.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 20,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 505,
                name: "David Alaba",
                photo: "https://media.api-sports.io/football/players/505.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 4,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 748,
                name: "Dani Ceballos",
                photo: "https://media.api-sports.io/football/players/748.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 19,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 744,
                name: "Brahim Díaz",
                photo: "https://media.api-sports.io/football/players/744.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 21,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1271,
                name: "Aurélien Tchouaméni",
                photo: "https://media.api-sports.io/football/players/1271.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 18,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 291964,
                name: "Arda Güler",
                photo:
                  "https://media.api-sports.io/football/players/291964.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 24,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    });
  }
  return (
    <div className="flex flex-col bg-zinc-800">
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
              matches.map((val, idx) => {
                return dateComparisonHandler(val);
              })
            ) : (
              <>LOADING</>
            )}
          </div>
        </div>
        {selectedMatch ? <Score val={selectedMatch} /> : <>LOADING</>}
      </section>
    </div>
  );
}

export default Main;
