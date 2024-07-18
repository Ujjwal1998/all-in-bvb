import { ResponsivePie, Pie } from "@nivo/pie";
import { createElement } from "react";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data /* see data tab */ }) => {
  return (
    <div className="grow">
      {data && (
        <ResponsivePie
          // data={newData}
          data={data}
          // margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
          // height={400}
          // width={300}
          sortByValue={true}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor="black"
          arcLinkLabelsTextOffset={1}
          arcLinkLabelsTextColor="#ffffff"
          arcLinkLabelsOffset={-12}
          arcLinkLabelsDiagonalLength={17}
          arcLinkLabelsStraightLength={12}
          arcLinkLabelsThickness={4}
          arcLinkLabelsColor={{ from: "color", modifiers: [] }}
          arcLabel={(e) => e.id + "(" + e.value + ")"}
          enableArcLinkLabels={false}
          arcLabelsRadiusOffset={0.5}
          arcLabelsTextColor="black"
          tooltip={(e) => {
            let { datum } = e;
            console.log(e, datum);
            console.log(datum.label, datum.value);
            return `${datum.label}\n ${datum.value}`;
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
          //     anchor: "bottom",
          //     direction: "row",
          //     justify: false,
          //     translateX: 21,
          //     translateY: 0,
          //     itemWidth: 93,
          //     itemHeight: 10,
          //     itemsSpacing: 0,
          //     symbolSize: 29,
          //     itemDirection: "top-to-bottom",
          //   },
          // ]}
        />
      )}
    </div>
  );
};

export default MyResponsivePie;
