import React from "react";
import "./Budget.scss";
import { Col, Card } from "antd";
import { ResponsivePie } from "@nivo/pie";

function MyResponsivePie() {
  const data = [
    {
      id: "Alimentação",
      label: "Alimentação",
      value: 590,
      color: "hsl(228, 70%, 50%)",
    },
    {
      id: "Escritório",
      label: "Escritório",
      value: 456,
      color: "hsl(288, 70%, 50%)",
    },
    {
      id: "Material",
      label: "Material",
      value: 376,
      color: "hsl(249, 70%, 50%)",
    },
    {
      id: "Extras",
      label: "Extras",
      value: 230,
      color: "hsl(221, 70%, 50%)",
    },
    {
      id: "Impostos",
      label: "Impostos",
      value: 411,
      color: "hsl(173, 70%, 50%)",
    },
  ];

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 15, right: 10, bottom: 10, left: 10 }}
      innerRadius={0.5}
      padAngle={5}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      radialLabelsSkipAngle={0}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: "color" }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      sortByValue={true}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
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
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
    />
  );
}
function Budget() {
  const data = [
    { x: "Alimentação", y: 200 },
    { x: "Fornecedores", y: 105 },
    { x: "Escritório", y: 310 },
  ];

  return (
    <Col span={12}>
      <Card
        size="small"
        headStyle={{ fontSize: 20 }}
        bodyStyle={{ height: 280 }}
        hoverable
        key="k21"
        title="Orçamento"
      >
        <div className="budget__container">
          <MyResponsivePie />
        </div>
      </Card>
    </Col>
  );
}

export default Budget;
