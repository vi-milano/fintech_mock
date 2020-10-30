import React from "react";
import "./Cards.scss";
import { Card, Col, Layout, Tag, Row, List } from "antd";
import QueueAnim from "rc-queue-anim";
import { ResponsiveLine } from "@nivo/line";
import CardStatement from "./CardStatement/CardStatement";
import { Select } from "antd";

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

function CardOverview() {
  return (
    <Card
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
      bodyStyle={{ flexGrow: 1, display: "flex", alignItems: "center" }}
      headStyle={{ fontSize: 20 }}
      hoverable
      key="k5"
      title="Cartões"
      extra={
        <Select defaultValue="lucy">
          <Option value="lucy">VISA ****1313</Option>
        </Select>
      }
    >
      <div className="xcreditcard__container">
        <div className="xcreditcard__body">
          <div className="xcreditcard__body--provider">Nu Bank</div>
          <div className="xcreditcard__body--decoration">XXX</div>
          <div className="xcreditcard__body--number">**** **** **** 1313</div>
          <div className="xcreditcard__body--data">
            <div className="xcreditcard__data--name">Vitor Milano</div>
            <div className="xcreditcard__data--date">10/20</div>
            <div className="xcreditcard__data--label">VISA</div>
          </div>
        </div>
        <div className="xcreditcard__info">
          <ul>
            <li>Limite: 1000</li>
            <li>Data de fechamento: 10/10/2020</li>
            <li>Limite disponível: 400</li>
            <li>Fatura atual: 600</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

function Cards() {
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
                <CardOverview />
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
      <Footer>Fintech Mock @ 2020 by Vitor Milano</Footer>
    </Layout>
  );
}

export default Cards;
