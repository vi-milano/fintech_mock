import React from "react";
import "./Balance.scss";
import { Col, Card } from "antd";
import { VictoryChart, VictoryLine } from "victory";

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
    <Col>
      <Card hoverable bodyStyle={{ height: 250 }} key="k3" title="Saldo">
        <VictoryChart
          domainPadding={{ y: 50 }}
          padding={{ top: 15, bottom: 15, left: 30, right: 20 }}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
        >
          <VictoryLine data={data} />
        </VictoryChart>
      </Card>
    </Col>
  );
}

export default Balance;
