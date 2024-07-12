import { ResponsiveLine } from "@nivo/line";
import { ResponsiveAreaBump, ResponsiveBump, Bump } from "@nivo/bump";

function LineChart({ data }) {
  console.log(data);

  const data3 = [
    {
      id: "M. Neuer",
      data: [
        {
          x: "Round of 16",
          y: 1,
        },
        {
          x: "Group A - 3",
          y: 100,
        },
        {
          x: "Group A - 2",
          y: 100,
        },
      ],
    },
    {
      id: "A. Rüdiger",
      data: [
        {
          x: "Round of 16",
          y: 100,
        },
        {
          x: "Group A - 3",
          y: 1,
        },
        {
          x: "Group A - 2",
          y: 100,
        },
      ],
    },
    {
      id: "J. Kimmich",
      data: [
        {
          x: "Round of 16",
          y: 100,
        },
        {
          x: "Group A - 3",
          y: 1,
        },
        {
          x: "Group A - 2",
          y: 2,
        },
      ],
    },
    {
      id: "N. Schlotterbeck",
      data: [
        {
          x: "Round of 16",
          y: 1,
        },
        {
          x: "Group A - 3",
          y: 100,
        },
        {
          x: "Group A - 2",
          y: 100,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={data}
      // height={300}
      // width={300}
      margin={{ top: 10, right: 70, bottom: 50, left: 30 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      theme={{
        background: "black",
        text: {
          fontSize: 11,
          fill: "#ffffff",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              stroke: "#777777",
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              fill: "#ffffff",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            title: {
              fill: "#ffffff",
            },
          },
          ticks: {
            line: {
              stroke: "#777777",
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: "#ffffff",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        grid: {
          line: {
            stroke: "#dddddd",
            strokeWidth: 1,
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            fill: "#333333",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
        tooltip: {
          wrapper: {},
          container: {
            background: "#ffffff",
            color: "#333333",
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
    />
  );
}

export default LineChart;
