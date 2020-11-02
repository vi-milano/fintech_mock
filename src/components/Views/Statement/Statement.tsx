import React, { ReactNode, useEffect, useState } from "react";
import "./Statement.scss";
import { Card, Col, Layout, Tag, Row } from "antd";
import {
  SwapOutlined,
  RetweetOutlined,
  CreditCardOutlined,
  BarcodeOutlined,
  DollarOutlined,
  MoreOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import { Avatar } from "antd";
import { BarExtendedDatum, ResponsiveBar } from "@nivo/bar";
import { useQuery } from "@apollo/client";
import { FULL_STATE } from "../../../services/MockService";
import NumberFormat from "react-number-format";

const { Content } = Layout;

function RespBar() {
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
    />
  );
}

function StatementItem(props: any) {
  const { data, loading } = props;

  const chooseTag = (categoria: string) => {
    switch (categoria) {
      case "alimentação":
        return <Tag color="green">Alimentação</Tag>;
        break;
      case "escritório":
        return <Tag color="purple">Escritório</Tag>;
        break;
      case "material":
        return <Tag color="magenta">Material</Tag>;
        break;
      case "impostos":
        return <Tag color="orange">Impostos</Tag>;
        break;
      case "salario":
        return <Tag color="geekblue">Salário</Tag>;
        break;
      default:
        return <Tag>Sem categoria</Tag>;
    }
  };
  const chooseFlag = (flag: string) => {
    switch (flag) {
      case "debito":
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<CreditCardOutlined />}
          />
        );
        break;
      case "transferencia":
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<SwapOutlined />}
          />
        );
        break;
      case "rendimento":
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<DollarOutlined />}
          />
        );
        break;
      case "boleto":
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<BarcodeOutlined />}
          />
        );
        break;
      default:
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<MoreOutlined />}
          />
        );
    }
  };

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
            icon={chooseFlag(data.flag)}
          />
        </Col>
        <Col style={{ paddingLeft: 10 }} span={15}>
          <div style={{ fontSize: 16, fontWeight: "bold" }}>{data.desc}</div>
          <div>{data.date}</div>
          {chooseTag(data.categoria)}
        </Col>
        <Col span={6} style={{ display: "flex", alignItems: "center" }}>
          <NumberFormat
            decimalScale={2}
            fixedDecimalScale={true}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={"R$"}
            displayType={"text"}
            value={data.value}
            renderText={(value) => (
              <span
                style={
                  !loading && data.value[0] !== "-"
                    ? { fontSize: 20, fontWeight: "bold", color: "green" }
                    : { fontSize: 20, fontWeight: "bold", color: "red" }
                }
              >
                {value}
              </span>
            )}
          />
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
      bodyStyle={{
        display: "flex",
      }}
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

function HeaderButton(props: {
  title: string;
  color: string;
  icon: ReactNode;
  filter: string;
  change: Function;
}) {
  const { title, icon, color, change, filter } = props;
  return (
    <Card
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
        width: 100,
      }}
      hoverable
      bordered={false}
      onClick={() => {
        change(filter);
      }}
    >
      {
        <Avatar
          style={{ color: color, backgroundColor: "#f3f3f3" }}
          size="large"
          icon={icon}
        />
      }
      <div>{title}</div>
    </Card>
  );
}
function Statement() {
  const { data, loading, refetch } = useQuery(FULL_STATE, {
    fetchPolicy: "no-cache",
  });

  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (filter) {
      refetch({ filter: filter });
    }
    console.log(data);
    console.log(loading);
  }, [loading, filter]);

  return (
    <Layout>
      <QueueAnim
        interval={400}
        component={Content}
        componentProps={{
          style: { display: "flex", flexDirection: "column", padding: 16 },
        }}
      >
        <Row gutter={[16, 10]}>
          <Col style={{ width: "100%" }} span={24}>
            <Card
              bodyStyle={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <HeaderButton
                title="Todos"
                color="navy"
                icon={<BarsOutlined />}
                filter="todos"
                change={setFilter}
              />
              <HeaderButton
                title="Créditos"
                color="limegreen"
                icon={<ShrinkOutlined />}
                filter="creditos"
                change={setFilter}
              />
              <HeaderButton
                title="Débitos"
                color="red"
                icon={<ArrowsAltOutlined />}
                filter="debitos"
                change={setFilter}
              />
              <HeaderButton
                title="Boletos"
                color="black"
                icon={<BarcodeOutlined />}
                filter="boletos"
                change={setFilter}
              />
              <HeaderButton
                title="Cartões"
                color="darkviolet"
                icon={<CreditCardOutlined />}
                filter="cartões"
                change={setFilter}
              />
              <HeaderButton
                title="Transferências"
                color="firebrick"
                icon={<RetweetOutlined />}
                filter="transferências"
                change={setFilter}
              />
              <HeaderButton
                title="Rendimentos"
                color="green"
                icon={<DollarOutlined />}
                filter="rendimentos"
                change={setFilter}
              />
            </Card>
          </Col>
        </Row>

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
              bodyStyle={{ overflowY: "scroll", height: 680, marginTop: 1 }}
              style={{ height: "100%" }}
              hoverable
            >
              {!loading && data
                ? data.entry.map((d: any) => (
                    <StatementItem loading={loading} data={d} />
                  ))
                : null}
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
