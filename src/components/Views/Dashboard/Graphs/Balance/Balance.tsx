import React from "react";
import "./Balance.scss";
import { Col, Card } from "antd";
import { ResponsiveLine } from "@nivo/line";

function MyResponsiveLine() {
  const data = [
    {
      id: "Crédito",
      color: "hsl(155, 70%, 50%)",
      data: [
        {
          x: "01/10",
          y: 20,
        },
        {
          x: "02/10",
          y: 131,
        },
        {
          x: "03/10",
          y: 234,
        },
        {
          x: "04/10",
          y: 187,
        },
        {
          x: "05/10",
          y: 149,
        },
        {
          x: "06/10",
          y: 298,
        },
        {
          x: "07/10",
          y: 291,
        },
        {
          x: "08/10",
          y: 9,
        },
        {
          x: "09/10",
          y: 140,
        },
        {
          x: "10/10",
          y: 234,
        },
        {
          x: "11/10",
          y: 86,
        },
        {
          x: "12/10",
          y: 253,
        },
      ],
    },
    {
      id: "Débito",
      color: "hsl(31, 70%, 50%)",
      data: [
        {
          x: "01/10",
          y: 48,
        },
        {
          x: "02/10",
          y: 215,
        },
        {
          x: "03/10",
          y: 134,
        },
        {
          x: "04/10",
          y: 40,
        },
        {
          x: "05/10",
          y: 157,
        },
        {
          x: "06/10",
          y: 29,
        },
        {
          x: "07/10",
          y: 35,
        },
        {
          x: "08/10",
          y: 169,
        },
        {
          x: "09/10",
          y: 207,
        },
        {
          x: "10/10",
          y: 2,
        },
        {
          x: "11/10",
          y: 167,
        },
        {
          x: "12/10",
          y: 184,
        },
      ],
    },
    {
      id: "Saldo",
      color: "hsl(173, 70%, 50%)",
      data: [
        {
          x: "01/10",
          y: 1,
        },
        {
          x: "02/10",
          y: 296,
        },
        {
          x: "03/10",
          y: 36,
        },
        {
          x: "04/10",
          y: 212,
        },
        {
          x: "05/10",
          y: 197,
        },
        {
          x: "06/10",
          y: 47,
        },
        {
          x: "07/10",
          y: 295,
        },
        {
          x: "08/10",
          y: 115,
        },
        {
          x: "09/10",
          y: 38,
        },
        {
          x: "10/10",
          y: 153,
        },
        {
          x: "11/10",
          y: 141,
        },
        {
          x: "12/10",
          y: 267,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 5, right: 90, bottom: 25, left: 40 }}
      xScale={{ type: "point" }}
      xFormat=" >-"
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
      enableGridX={false}
      colors={{ scheme: "nivo" }}
      lineWidth={2}
      pointSize={2}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      enableSlices="x"
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
    />
  );
}
function Balance() {
  const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: -2 },
    { x: 4, y: 3 },
    { x: 5, y: 2 },
  ];
  return (
    <Col span={12}>
      <Card
        hoverable
        headStyle={{ fontSize: 20 }}
        bodyStyle={{ height: 280 }}
        key="k3"
        title="Saldo"
        size="small"
      >
        <MyResponsiveLine />
      </Card>
    </Col>
  );
}

export default Balance;
