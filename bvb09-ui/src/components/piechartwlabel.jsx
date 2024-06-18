import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { Container } from "@mui/material";

// const data = [
//   { value: 5, label: "A", color: "white" },
//   { value: 10, label: "B" },
//   { value: 15, label: "C" },
//   { value: 20, label: "D" },
// ];

const size = {
  width: 320,
  height: 500,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: "white",
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel({ voteData }) {
  // const [data, setData] = React.useState([]);
  let data = [];
  // voteData &&
  //   voteData.forEach((val, idx) => {
  //     // data.push({ value: val.votes, label: val.name, color: "white" });
  //     setData([...data, { value: val.votes, label: val.name, color: "white" }]);
  //   });
  let maxVotes = "";
  let maxVotesCounter = 0;
  if (voteData) {
    for (const [key, value] of Object.entries(voteData)) {
      // setData([...data, { value: value, label: key, color: "white" }]);
      if (value > maxVotesCounter) {
        maxVotesCounter = value;
        maxVotes = key;
      }
      data.push({ value: value, label: key });
    }
    // setData()
  }
  return (
    <>
      {voteData ? (
        <PieChart
          series={[{ data, innerRadius: 80 }]}
          {...size}
          margin={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          slotProps={{
            legend: {
              labelStyle: {
                fill: "white",
              },
              direction: "row",
              position: { vertical: "bottom", horizontal: "middle" },
              // padding: 0,
            },
          }}
        >
          <PieCenterLabel>{maxVotes}</PieCenterLabel>
        </PieChart>
      ) : (
        <>LOADING</>
      )}
    </>
  );
}
