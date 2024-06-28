import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ChartsTooltip, ChartsXAxis } from "@mui/x-charts";

export default function DifferentLength() {
  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <ResponsiveChartContainer
          sx={{
            //change left yAxis label styles
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              strokeWidth: "0.4",
              fill: "#FFFFFF",
            },
            // change all labels fontFamily shown on both xAxis and yAxis
            "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
              fontFamily: "Roboto",
              fill: "#FFFFFF",
            },
            // change bottom label styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              strokeWidth: "0.5",
              fill: "#FFFFFF",
            },
            // bottomAxis Line Styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "#FFFFFF",
              strokeWidth: 0.4,
            },
            // leftAxis Line Styles
            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "#FFFFFF",
              strokeWidth: 0.4,
            },
            ".MuiChartsAxis-tick": {
              stroke: "#FFFFFF",
              strokeWidth: 2,
            },
            ".MuiChartsAxis-label": {
              stroke: "#FFFFFF",
              strokeWidth: 1,
              fontFamily: "Arial",
            },
          }}
          series={[
            {
              type: "line",
              data: [1, 2, 3],
              label: "reus",
            },
            {
              type: "line",
              data: [2, 0, 4, 2, 1],
              label: "auba",
            },
            {
              type: "line",
              data: [2, 0, 4, 2, 1],
              label: "auba",
            },
            {
              type: "line",
              data: [2, 0, 4, 2, 1],
              label: "auba",
            },
            {
              type: "line",
              data: [2, 0, 4, 2, 1],
              label: "auba",
            },
            {
              type: "line",
              data: [1, 20, 1, 0, 11],
              label: "auba",
            },
            {
              type: "line",
              data: [2, 0, 2, 1, 12],
              label: "auba",
            },
          ]}
          xAxis={[
            {
              data: ["MD1", "MD2", "MD3", "MD4", "MD5"],
              scaleType: "band",
              id: "x-axis-id",
            },
          ]}
          yAxis={[]}
          height={200}
        >
          <LinePlot />
          <ChartsXAxis
            label="Bundesliga"
            position="bottom"
            axisId="x-axis-id"
            fill="blue"
            fontFamily="Arial"
            labelStyle={{ fontFamily: "Arial" }}
            // classes={{ ".MuiChartsXAxis-bottom": "text-white" }}
          />
          <MarkPlot />
          <ChartsTooltip />
        </ResponsiveChartContainer>
      </div>
    </Box>
  );
}
