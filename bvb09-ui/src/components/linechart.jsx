import { ResponsiveBump } from "@nivo/bump";

function LineChart({ data }) {
  console.log(data);

  const theme = {
    background: "#27272a",
    text: {
      fontSize: 20,
      fill: "#fbbf24",
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
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      ticks: {
        line: {
          stroke: "#777777",
          strokeWidth: 20,
        },
        text: {
          fontSize: 20,
          fill: "#fbbf24",
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
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      text: {
        fontSize: 11,
        fill: "#333333",
        outlineWidth: 0,
        outlineColor: "transparent",
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
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
  };
  return (
    <ResponsiveBump
      data={data}
      colors={{ scheme: "nivo" }}
      lineWidth={3}
      interpolation="linear"
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: "serie.color" }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -36,
        truncateTickAt: 0,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "ranking",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
      theme={theme}
    />
  );
}

export default LineChart;
