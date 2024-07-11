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
    <Bump
      data={data3}
      height={300}
      width={300}
      colors={{ scheme: "spectral" }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      startLabel={true}
      startLabelPadding={2}
      endLabelPadding={24}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: "serie.color" }}
      enableGridY={false}
      axisTop={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={null}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
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
      fill={[
        {
          match: {
            id: "J. Kimmich",
          },
          id: "dots",
        },
        {
          match: {
            id: "J. Kimmich",
          },
          id: "lines",
        },
      ]}
    />
  );
}

export default LineChart;
