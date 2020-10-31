import React, { useState } from "react";
import "./Cards.scss";
import { Card, Col, Layout, Tag, Row, List } from "antd";
import QueueAnim from "rc-queue-anim";
import { ResponsiveLine } from "@nivo/line";
import CardStatement from "./CardStatement/CardStatement";
import { Select } from "antd";
import NumberFormat from "react-number-format";
import { useQuery } from "@apollo/client";
import { CARD_INFO } from "../../../services/MockService";

const { Option } = Select;
const { Footer, Content } = Layout;

const MyResponsiveLine = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(299, 70%, 50%)",
      data: [
        {
          x: "JAN",
          y: 15,
        },
        {
          x: "FEV",
          y: 248,
        },
        {
          x: "MAR",
          y: 148,
        },
        {
          x: "ABR",
          y: 236,
        },
        {
          x: "MAI",
          y: 287,
        },
        {
          x: "JUN",
          y: 159,
        },
        {
          x: "JUL",
          y: 196,
        },
        {
          x: "AGO",
          y: 272,
        },
        {
          x: "SET",
          y: 254,
        },
        {
          x: "OUT",
          y: 37,
        },
        {
          x: "NOV",
          y: 174,
        },
        {
          x: "DEZ",
          y: 114,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
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
    />
  );
};

function CardOverview(props: any) {
  let cards = props.data.cards;
  const [activeCard, setActiveCard] = useState(0);
  return (
    <Card
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
      bodyStyle={{ flexGrow: 1, display: "flex", alignItems: "center" }}
      headStyle={{ fontSize: 20 }}
      hoverable
      key="k5"
      title="Cartões"
      extra={
        <Select
          onChange={(value) => {
            setActiveCard(Number(value));
          }}
          defaultValue="0"
        >
          <Option value="0">
            {cards[0].label}****{cards[0].final}
          </Option>
          <Option value="1">ELO ****4123</Option>
        </Select>
      }
    >
      <div className="creditcard__container">
        <div
          className={`creditcard__body ${cards[activeCard].banco
            .toLowerCase()
            .replace(" ", "_")}`}
        >
          <div className="creditcard__body--provider">
            {cards[activeCard].banco}
          </div>
          <div className="creditcard__body--decoration">
            <img
              style={{ height: 35 }}
              src={
                "https://cdn140.picsart.com/288622685092211.png?type=webp&to=min&r=640"
              }
            />
          </div>
          <div className="creditcard__body--number">
            **** **** **** {cards[activeCard].final}
          </div>
          <div className="creditcard__body--data">
            <div className="creditcard__data--name">
              {cards[activeCard].titular}
            </div>
            <div className="creditcard__data--date">
              {cards[activeCard].dataVencimento}
            </div>
            <div className="creditcard__data--label">
              {cards[activeCard].label}
            </div>
          </div>
        </div>
        <div className="creditcard__info">
          <ul>
            <li>
              Limite:{" "}
              <NumberFormat
                decimalScale={2}
                fixedDecimalScale={true}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"R$"}
                displayType={"text"}
                value={cards[activeCard].limite}
                renderText={(value) => (
                  <span style={{ fontWeight: "bold" }}>{value}</span>
                )}
              />
            </li>
            <li>
              Data de fechamento:{" "}
              <span style={{ fontWeight: "bold" }}>
                {cards[activeCard].dataVencimento}
              </span>
            </li>
            <li>
              Limite disponível:{" "}
              <NumberFormat
                decimalScale={2}
                fixedDecimalScale={true}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"R$"}
                displayType={"text"}
                value={cards[activeCard].limite - cards[activeCard].saldo}
                renderText={(value) => (
                  <span style={{ fontWeight: "bold" }}>{value}</span>
                )}
              />
            </li>
            <li>
              Fatura atual:{" "}
              <NumberFormat
                decimalScale={2}
                fixedDecimalScale={true}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"R$"}
                displayType={"text"}
                value={cards[activeCard].saldo}
                renderText={(value) => (
                  <span style={{ fontWeight: "bold" }}>{value}</span>
                )}
              />
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

function Cards() {
  const cardInfo = useQuery(CARD_INFO);

  return (
    <Layout>
      <Content style={{ margin: "10px 10px 0 10px" }}>
        <QueueAnim
          interval={300}
          component={Row}
          componentProps={{ gutter: [15, 15], style: { height: "100%" } }}
        >
          <QueueAnim
            delay={300}
            interval={300}
            component={Col}
            componentProps={{ key: "col-1", span: 12 }}
          >
            <Row key="row-1" gutter={[10, 10]} style={{ height: "50%" }}>
              <Col span={24}>
                <CardOverview data={cardInfo.data} />
              </Col>
            </Row>
            <Row key="row-2" style={{ height: "50%" }}>
              <Col span={24}>
                <Card
                  style={{
                    height: "100%",
                  }}
                  bodyStyle={{
                    height: "80%",
                  }}
                  title="Gráfico"
                >
                  <MyResponsiveLine />
                </Card>
              </Col>
            </Row>
          </QueueAnim>
          <Col key="col-2" span={12}>
            <CardStatement />
          </Col>
        </QueueAnim>
      </Content>
    </Layout>
  );
}

export default Cards;
