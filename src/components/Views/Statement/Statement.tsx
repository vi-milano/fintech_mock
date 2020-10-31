import React from "react";
import "./Statement.scss";
import { Card, Col, Layout, Tag, Row } from "antd";
import { SwapOutlined, RetweetOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import { Avatar } from "antd";
import { BarExtendedDatum, ResponsiveBar } from "@nivo/bar";

const { Footer, Content } = Layout;
const data = [
  {
    title: "Peça de foguete 1",
  },
  {
    title: "Peça de foguete 2",
  },
  {
    title: "Peça de foguete 3",
  },
  {
    title: "Peça de foguete 4",
  },
  {
    title: "Peça de foguete 11",
  },
  {
    title: "Peça de foguete 21",
  },
  {
    title: "Peça de foguete 31",
  },
  {
    title: "Peça de foguete 41",
  },

  {
    title: "Peça de foguete 42",
  },
  {
    title: "Peça de foguete 12",
  },
  {
    title: "Peça de foguete 22",
  },
  {
    title: "Peça de foguete 32",
  },
  {
    title: "Peça de foguete 42",
  },
];

function RespBar() {
  const data = [
    {
      month: "JAN",
      saldo: -32000,
      saldoColor: "hsl(275, 70%, 50%)",
    },
    {
      month: "FEV",
      saldo: -24000,
      saldoColor: "hsl(360, 70%, 50%)",
    },
    {
      month: "MAR",
      saldo: -9000,
      saldoColor: "hsl(86, 70%, 50%)",
    },
    {
      month: "ABR",
      saldo: 14000,
      saldoColor: "hsl(174, 70%, 50%)",
    },
    {
      month: "MAI",
      saldo: 25000,
      saldoColor: "hsl(5, 70%, 50%)",
    },
    {
      month: "JUN",
      saldo: 36000,
      saldoColor: "hsl(208, 70%, 50%)",
    },
    {
      month: "JUL",
      saldo: 40000,
      saldoColor: "hsl(113, 70%, 50%)",
    },
    {
      month: "AGO",
      saldo: 39000,
      saldoColor: "hsl(113, 70%, 50%)",
    },
    {
      month: "SET",
      saldo: 32000,
      saldoColor: "hsl(113, 70%, 50%)",
    },
    {
      month: "OUT",
      saldo: 35000,
      saldoColor: "hsl(113, 70%, 50%)",
    },
    {
      month: "NOV",
      saldo: 36000,
      saldoColor: "hsl(113, 70%, 50%)",
    },
    {
      month: "DEZ",
      saldo: 31000,
      saldoColor: "hsl(113, 70%, 50%)",
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={["saldo"]}
      indexBy="month"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      padding={0.6}
      colors={"#7eff88"}
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
            console.log(d.data.value);
            return d.data.value < 0;
          },
          id: "negativo",
        },
        {
          match: (d: BarExtendedDatum) => {
            console.log(d.data.value);
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
    />
  );
}

function StatementItem(data: {}) {
  return (
    <Card
      size="small"
      style={{ margin: "4px auto " }}
      bodyStyle={{ display: "flex" }}
    >
      <Row style={{ width: "100%" }}>
        <Col
          span={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<SwapOutlined />}
          />
        </Col>
        <Col style={{ paddingLeft: 10 }} span={15}>
          <div style={{ fontSize: 16, fontWeight: "bold" }}>
            Restaurante Dona Cacilda
          </div>
          <div>10/10/2020 </div>
          <Tag color="green">Alimentação</Tag>
        </Col>
        <Col span={6} style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 20 }}>R$ 10.000,00</span>
        </Col>
      </Row>
    </Card>
  );
}

function BalanceItem(data: {}) {
  return (
    <Card
      size="small"
      style={{ margin: "4px auto " }}
      bodyStyle={{ display: "flex" }}
    >
      <Row style={{ width: "100%" }}>
        <Col
          span={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<RetweetOutlined />}
          />
        </Col>
        <Col
          span={10}
          style={{
            paddingLeft: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: "bold" }}>Entradas</div>
          <div style={{ fontSize: 18, fontWeight: "bold", color: "green" }}>
            R$ 12.460,00
          </div>
        </Col>
        <Col
          span={10}
          style={{
            paddingLeft: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: "bold" }}>Saídas</div>
          <div style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
            R$ 9.320,00
          </div>
        </Col>
      </Row>
    </Card>
  );
}
function Statement(props: any) {
  return (
    <Layout>
      <QueueAnim
        interval={400}
        component={Content}
        componentProps={{
          style: { display: "flex", flexDirection: "column", padding: 16 },
        }}
      >
        <QueueAnim
          key="b"
          component={Row}
          interval={400}
          componentProps={{
            style: { flexGrow: 1 },
            gutter: [16, 16],
          }}
        >
          <Col key="a1" span={14}>
            <Card
              title="Extrato"
              headStyle={{ fontSize: 20 }}
              style={{ height: "100%" }}
              hoverable
            >
              <StatementItem />
              <StatementItem />
              <StatementItem />
              <StatementItem />
              <StatementItem />
              <StatementItem />
            </Card>
          </Col>
          <Col key="a2" span={10}>
            <Card
              title="Resumo mensal"
              headStyle={{ fontSize: 20 }}
              style={{ height: "100%" }}
              hoverable
            >
              <div style={{ height: "50%" }}>
                <BalanceItem />
              </div>
              <div style={{ height: "500px" }}>
                <RespBar />
              </div>
            </Card>
          </Col>
        </QueueAnim>
      </QueueAnim>
    </Layout>
  );
}

export default Statement;
