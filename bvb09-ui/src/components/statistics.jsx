import { useEffect, useState } from "react";

// import DifferentLength from "./linechart";
import LineChart from "./linechart";
// import getBundesligaVotesByMatchDay from "../apis/statisticsData.js";

// {
//   'Regular Season - 34': [
//     {
//       'G. Kobel': 1,
//       'J. Ryerson': 1,
//       'M. Sabitzer': 1,
//       'I. Maatsen': 2
//     }
//   ],
//   'Regular Season - 33': [
//     { 'Mateu Morey': 1, 'S. Özcan': 1, 'M. Reus': 1, 'Y. Moukoko': 1 }
//   ]
// }
// series={[
//   {
//     type: "line",
//     data: [1, 2, 3, 2, 1],
//     label: "reus",
//   },
//   {
//     type: "line",
//     data: [2, 0, 4, 2, 1],
//     label: "auba",
//   },
// ]}
function Statisitics() {
  // const [bligaVotes, setBligaVotes] = useState(null);
  // useEffect(() => {
  //   async function fetchData() {
  //     const bundesligaVotes = await getBundesligaVotesByMatchDay();
  //     setBligaVotes(bundesligaVotes);
  //   }
  //   fetchData();
  // }, []);
  const data = [
    {
      id: "Serie 1",
      data: [
        {
          x: "2000",
          y: 120,
        },
        {
          x: "2001",
          y: 6,
        },
        {
          x: "2002",
          y: 6,
        },
        {
          x: "2003",
          y: 8,
        },
        {
          x: "2004",
          y: 7,
        },
      ],
    },
    {
      id: "Serie 2",
      data: [
        {
          x: "2000",
          y: 2,
        },
        {
          x: "2001",
          y: 5,
        },
        {
          x: "2002",
          y: 12,
        },
        {
          x: "2003",
          y: 2,
        },
        {
          x: "2004",
          y: 3,
        },
      ],
    },
    {
      id: "Serie 3",
      data: [
        {
          x: "2000",
          y: 4,
        },
        {
          x: "2001",
          y: 7,
        },
        {
          x: "2002",
          y: 4,
        },
        {
          x: "2003",
          y: 11,
        },
        {
          x: "2004",
          y: 5,
        },
      ],
    },
    {
      id: "Serie 4",
      data: [
        {
          x: "2000",
          y: 8,
        },
        {
          x: "2001",
          y: 2,
        },
        {
          x: "2002",
          y: 10,
        },
        {
          x: "2003",
          y: 12,
        },
        {
          x: "2004",
          y: 6,
        },
      ],
    },
    {
      id: "Serie 5",
      data: [
        {
          x: "2000",
          y: 5,
        },
        {
          x: "2001",
          y: 9,
        },
        {
          x: "2002",
          y: 7,
        },
        {
          x: "2003",
          y: 9,
        },
        {
          x: "2004",
          y: 9,
        },
      ],
    },
    {
      id: "Serie 6",
      data: [
        {
          x: "2000",
          y: 9,
        },
        {
          x: "2001",
          y: 1,
        },
        {
          x: "2002",
          y: 8,
        },
        {
          x: "2003",
          y: 3,
        },
        {
          x: "2004",
          y: 2,
        },
      ],
    },
    {
      id: "Serie 7",
      data: [
        {
          x: "2000",
          y: 1,
        },
        {
          x: "2001",
          y: 10,
        },
        {
          x: "2002",
          y: 2,
        },
        {
          x: "2003",
          y: 6,
        },
        {
          x: "2004",
          y: 12,
        },
      ],
    },
    {
      id: "Serie 8",
      data: [
        {
          x: "2000",
          y: 10,
        },
        {
          x: "2001",
          y: 4,
        },
        {
          x: "2002",
          y: 1,
        },
        {
          x: "2003",
          y: 5,
        },
        {
          x: "2004",
          y: 10,
        },
      ],
    },
    {
      id: "Serie 9",
      data: [
        {
          x: "2000",
          y: 7,
        },
        {
          x: "2001",
          y: 3,
        },
        {
          x: "2002",
          y: 3,
        },
        {
          x: "2003",
          y: 1,
        },
        {
          x: "2004",
          y: 11,
        },
      ],
    },
    {
      id: "Serie 10",
      data: [
        {
          x: "2000",
          y: 6,
        },
        {
          x: "2001",
          y: 11,
        },
        {
          x: "2002",
          y: 5,
        },
        {
          x: "2003",
          y: 10,
        },
        {
          x: "2004",
          y: 4,
        },
      ],
    },
    {
      id: "Serie 11",
      data: [
        {
          x: "2000",
          y: 11,
        },
        {
          x: "2001",
          y: 8,
        },
        {
          x: "2002",
          y: 9,
        },
        {
          x: "2003",
          y: 7,
        },
        {
          x: "2004",
          y: 1,
        },
      ],
    },
    {
      id: "Serie 12",
      data: [
        {
          x: "2000",
          y: 3,
        },
        {
          x: "2001",
          y: 12,
        },
        {
          x: "2002",
          y: 11,
        },
        {
          x: "2003",
          y: 4,
        },
        {
          x: "2004",
          y: 8,
        },
      ],
    },
    {
      id: "Serie 4",
      data: [
        {
          x: "2000",
          y: 8,
        },
        {
          x: "2001",
          y: 2,
        },
        {
          x: "2002",
          y: 10,
        },
        {
          x: "2003",
          y: 12,
        },
        {
          x: "2004",
          y: 6,
        },
      ],
    },
    {
      id: "Serie 5",
      data: [
        {
          x: "2000",
          y: 5,
        },
        {
          x: "2001",
          y: 9,
        },
        {
          x: "2002",
          y: 7,
        },
        {
          x: "2003",
          y: 9,
        },
        {
          x: "2004",
          y: 9,
        },
      ],
    },
    {
      id: "Serie 6",
      data: [
        {
          x: "2000",
          y: 9,
        },
        {
          x: "2001",
          y: 1,
        },
        {
          x: "2002",
          y: 8,
        },
        {
          x: "2003",
          y: 3,
        },
        {
          x: "2004",
          y: 2,
        },
      ],
    },
    {
      id: "Serie 7",
      data: [
        {
          x: "2000",
          y: 1,
        },
        {
          x: "2001",
          y: 10,
        },
        {
          x: "2002",
          y: 2,
        },
        {
          x: "2003",
          y: 6,
        },
        {
          x: "2004",
          y: 12,
        },
      ],
    },
    {
      id: "Serie 8",
      data: [
        {
          x: "2000",
          y: 10,
        },
        {
          x: "2001",
          y: 4,
        },
        {
          x: "2002",
          y: 1,
        },
        {
          x: "2003",
          y: 5,
        },
        {
          x: "2004",
          y: 10,
        },
      ],
    },
    {
      id: "Serie 9",
      data: [
        {
          x: "2000",
          y: 7,
        },
        {
          x: "2001",
          y: 3,
        },
        {
          x: "2002",
          y: 3,
        },
        {
          x: "2003",
          y: 1,
        },
        {
          x: "2004",
          y: 11,
        },
      ],
    },
    {
      id: "Serie 10",
      data: [
        {
          x: "2000",
          y: 6,
        },
        {
          x: "2001",
          y: 11,
        },
        {
          x: "2002",
          y: 5,
        },
        {
          x: "2003",
          y: 10,
        },
        {
          x: "2004",
          y: 4,
        },
      ],
    },
    {
      id: "Serie 51",
      data: [
        {
          x: "2000",
          y: 8,
        },
        {
          x: "2001",
          y: 8,
        },
        {
          x: "2002",
          y: 9,
        },
        {
          x: "2003",
          y: 7,
        },
        {
          x: "2004",
          y: 1,
        },
      ],
    },
    {
      id: "Serie 12",
      data: [
        {
          x: "2000",
          y: 3,
        },
        {
          x: "2001",
          y: 12,
        },
        {
          x: "2002",
          y: 11,
        },
        {
          x: "2003",
          y: 4,
        },
        {
          x: "2004",
          y: 8,
        },
      ],
    },
  ];
  return (
    <div className="bg-zinc-600 w-3/5 max-h-96">
      {/* {bligaVotes && (
        <DifferentLength
          xaxisLabels={Object.keys(bligaVotes)}
        ></DifferentLength>
      )} */}
      <LineChart data={data}></LineChart>
    </div>
  );
}

export default Statisitics;
