import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    height
    keys={["A", "B", "C"]}
    // indexBy="player"
    margin={{ top: 0, right: 0, bottom: 50, left: 0 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "pastel2" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    // fill={[
    //   {
    //     match: {
    //       id: "fries",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "sandwich",
    //     },
    //     id: "lines",
    //   },
    // ]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    borderWidth={2}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 2,
      tickPadding: 5,
      tickRotation: 90,
      legend: "player",
      legendPosition: "middle",
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    theme={{
      background: "#252222",
      text: {
        fontSize: 22,
        fill: "#ffffff",
        outlineWidth: 0,
        outlineColor: "#1b1818",
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
            strokeWidth: 1,
          },
          text: {
            fontSize: 18,
            fill: "#fff5f5",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
        },
      },
      grid: {
        line: {
          stroke: "#dddddd",
          strokeWidth: 0,
        },
      },
      legends: {
        title: {
          text: {
            fontSize: 11,
            fill: "#ffffff",
            outlineWidth: 0,
            outlineColor: "#ffffff",
          },
        },
        text: {
          fontSize: 16,
          fill: "#ffffff",
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
    }}
    // barAriaLabel={(e) =>
    //   e.id + ": " + e.formattedValue + " in country: " + e.indexValue
    // }
  />
);
export default MyResponsiveBar;
