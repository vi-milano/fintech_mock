import { BarExtendedDatum, ResponsiveBar } from "@nivo/bar";
import React from "react";
import "./StatementGraph.scss";

function StatementGraph() {
  const data = [
    {
      month: "JAN",
      saldo: -32000,
    },
    {
      month: "FEV",
      saldo: -24000,
    },
    {
      month: "MAR",
      saldo: -9000,
    },
    {
      month: "ABR",
      saldo: 14000,
    },
    {
      month: "MAI",
      saldo: 25000,
    },
    {
      month: "JUN",
      saldo: 36000,
    },
    {
      month: "JUL",
      saldo: 40000,
    },
    {
      month: "AGO",
      saldo: 39000,
    },
    {
      month: "SET",
      saldo: 32000,
    },
    {
      month: "OUT",
      saldo: 35000,
    },
    {
      month: "NOV",
      saldo: 36000,
    },
    {
      month: "DEZ",
      saldo: 31000,
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={["saldo"]}
      indexBy="month"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      padding={0.6}
      colors={"black"}
      defs={[
        {
          id: "negativo",
          type: "patternLines",
          background: "#ff5252",
          color: "#ff5252",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "positivo",
          type: "patternLines",
          background: "#d0daff",
          color: "#d0daff",
          size: 4,
          padding: 1,
          stagger: true,
        },
      ]}
      fill={[
        {
          match: (d: BarExtendedDatum) => {
            return d.data.value < 0;
          },
          id: "negativo",
        },
        {
          match: (d: BarExtendedDatum) => {
            return d.data.value > 0;
          },
          id: "positivo",
        },
      ]}
      borderColor="#363636"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      enableLabel={false}
      labelTextColor="#000000"
      legends={[]}
      animate={true}
      borderWidth={1}
      motionStiffness={90}
      motionDamping={15}
      tooltip={(props) => (
        <span>
          Gasto Total:{" "}
          <span style={{ fontWeight: "bold" }}>R${props.value}</span>
        </span>
      )}
    />
  );
}
export default StatementGraph;
