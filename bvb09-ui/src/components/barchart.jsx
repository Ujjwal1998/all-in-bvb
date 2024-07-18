import { ResponsiveBar, Bar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data }) => {
  let keys = [];
  for (const item of data) {
    keys = keys.concat(Object.keys(item));
  }
  let playerKeys = [...new Set(keys)];
  playerKeys.splice(0, 1);
  return (
    <ResponsiveBar
      data={data}
      // height={300}
      // width={350}
      keys={playerKeys}
      indexBy={"round"}
      margin={{ top: 10, right: 120, bottom: 50, left: 30 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "paired" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      borderWidth={2}
      axisTop={null}
      axisRight={null}
      // axisBottom={{
      //   tickSize: 0,
      //   tickPadding: 5,
      //   tickRotation: 90,
      //   legend: "Players",
      //   legendPosition: "middle",
      //   legendOffset: 40,
      //   truncateTickAt: 0,
      // }}
      // axisLeft={{
      //   tickSize: 5,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: "Votes",
      //   legendPosition: "middle",
      //   legendOffset: -40,
      //   truncateTickAt: 0,
      // }}
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
          itemsSpacing: 0,
          itemWidth: 109,
          itemHeight: 14,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 10,
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
      // barAriaLabel={(e) =>
      //   e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      // }
    />
  );
};
export default MyResponsiveBar;
