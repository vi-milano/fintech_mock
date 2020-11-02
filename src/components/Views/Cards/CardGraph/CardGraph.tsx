import { ResponsiveLine } from "@nivo/line";
import React from "react";
import "./CardGraph.scss";

const CardGraph = () => {
  const data = [
    {
      id: "statement",
      color: "hsl(299, 70%, 50%)",
      data: [
        {
          x: "JAN",
          y: 1200,
        },
        {
          x: "FEV",
          y: 2480,
        },
        {
          x: "MAR",
          y: 1484,
        },
        {
          x: "ABR",
          y: 2366,
        },
        {
          x: "MAI",
          y: 2873,
        },
        {
          x: "JUN",
          y: 1590,
        },
        {
          x: "JUL",
          y: 1964,
        },
        {
          x: "AGO",
          y: 2727,
        },
        {
          x: "SET",
          y: 2543,
        },
        {
          x: "OUT",
          y: 3761,
        },
        {
          x: "NOV",
          y: 1748,
        },
        {
          x: "DEZ",
          y: 1144,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 30, right: 30, bottom: 30, left: 40 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      useMesh={true}
      colors={"#1890ff"}
      tooltip={(props) => (
        <span>
          Gasto Total:{" "}
          <span style={{ fontWeight: "bold" }}>
            R${props.point.data.yFormatted}
          </span>
        </span>
      )}
    />
  );
};
export default CardGraph;
