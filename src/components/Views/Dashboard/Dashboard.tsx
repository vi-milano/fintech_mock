import React from "react";
import "./Dashboard.scss";
import { Card, Col, Layout, Row } from "antd";
import Balance from "./Graphs/Balance/Balance";
import Budget from "./Graphs/Budget/Budget";
import Statement from "./Tables/Statement/Statement";
import Cards from "./Other/Cards/Cards";
import QueueAnim from "rc-queue-anim";

const { Header, Footer, Content } = Layout;

function Placeholder() {
  return (
    <Col span={6}>
      <Card size="small" hoverable key="adada" title="Dados">
        <div style={{ fontSize: 24 }}>R$ 10.000,00</div>
      </Card>
    </Col>
  );
}
function Dashboard() {
  return (
    <Layout>
      <Header style={{ color: "white" }}> Here goes the header</Header>
      <Content style={{ margin: 10 }}>
        <div style={{ margin: "0 auto", maxWidth: "1440px" }}>
          <QueueAnim
            interval={300}
            component={Row}
            componentProps={{ gutter: [15, 15] }}
          >
            <Placeholder key="d" />
            <Placeholder key="dd" />
            <Placeholder key="ddd" />
            <Placeholder key="dddd" />
            <Cards key="zzz" />
            <Statement key="zz" />
            <Balance key="z" />
            <Budget key="zzzz" />
          </QueueAnim>
        </div>
      </Content>
      <Footer>Fintech Mock @ 2020 by Vitor Milano</Footer>
    </Layout>
  );
}

export default Dashboard;
