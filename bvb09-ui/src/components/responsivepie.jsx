import { ResponsivePie } from "@nivo/pie";
import { createElement } from "react";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data /* see data tab */ }) => {
  // const newData = [
  //   {
  //     id: "M. Neuer",
  //     label: "M. Neuer",
  //     value: 2,
  //   },
  //   {
  //     id: "M. Neuer",
  //     label: "M. Neuer",
  //     value: 2,
  //   },
  // ];
  const newData = [
    {
      id: "M. Neuer",
      label: "M. Neuer",
      value: 5,
    },
    {
      id: "M. Mittelstädt",
      label: "M. Mittelstädt",
      value: 2,
    },
    {
      id: "A. Rüdiger",
      label: "A. Rüdiger",
      value: 3,
    },
    {
      id: "J. Kimmich",
      label: "J. Kimmich",
      value: 2,
    },
    {
      id: "F. Wirtz",
      label: "F. Wirtz",
      value: 1,
    },
    {
      id: "J. Tah",
      label: "J. Tah",
      value: 1,
    },
  ];
  return (
    <div className="w-full h-96 bg-zinc-800">
      {data && (
        <ResponsivePie
          // data={newData}
          data={data}
          margin={{ top: 0, right: 100, bottom: 0, left: 100 }}
          sortByValue={true}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={4}
          borderColor="black"
          arcLinkLabelsTextOffset={1}
          arcLinkLabelsTextColor="#ffffff"
          arcLinkLabelsOffset={-12}
          arcLinkLabelsDiagonalLength={17}
          arcLinkLabelsStraightLength={12}
          arcLinkLabelsThickness={4}
          arcLinkLabelsColor={{ from: "color", modifiers: [] }}
          arcLabel="value"
          arcLabelsRadiusOffset={0.5}
          arcLabelsTextColor="black"
          tooltip={(e) => {
            let { datum } = e;
            console.log(e, datum);
            console.log(datum.label);
            return datum.label;
            // return createElement()
            // return i.createElement(
            //   l,
            //   { style: { color: t.color } },
            //   i.createElement(s, null, "id"),
            //   i.createElement(d, null, t.id),
            //   i.createElement(s, null, "value"),
            //   i.createElement(d, null, t.value),
            //   i.createElement(s, null, "formattedValue"),
            //   i.createElement(d, null, t.formattedValue),
            //   i.createElement(s, null, "color"),
            //   i.createElement(d, null, t.color)
            // );
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          // legends={[
          //   {
          //     anchor: "top-left",
          //     direction: "column",
          //     justify: false,
          //     translateX: 0,
          //     translateY: 0,
          //     itemWidth: 100,
          //     itemHeight: 20,
          //     itemsSpacing: 0,
          //     symbolSize: 20,
          //     itemDirection: "left-to-right",
          //   },
          // ]}
        />
      )}
    </div>
  );
};

export default MyResponsivePie;
