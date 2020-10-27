import React from "react";
import "./Dashboard.scss";
import { Layout, Row } from "antd";
import Balance from "./Graphs/Balance/Balance";
import Budget from "./Graphs/Budget/Budget";
import Statement from "./Tables/Statement/Statement";
import Cards from "./Other/Cards/Cards";
import QueueAnim from "rc-queue-anim";

const { Header, Footer, Content } = Layout;

function Dashboard() {
  return (
    <Layout>
      <Header style={{ color: "white" }}> Here goes the header</Header>
      <Content style={{ margin: 10 }}>
        <div style={{ margin: "0 auto", maxWidth: "1920px" }}>
          <QueueAnim
            interval={500}
            duration={2000}
            component={Row}
            componentProps={{ gutter: [10, 10] }}
          >
            <Balance key="z" />
            <Statement key="zz" />
            <Cards key="zzz" />
            <Budget key="zzzz" />
          </QueueAnim>
        </div>
      </Content>
      <Footer>Fintech Mock @ 2020 by Vitor Milano</Footer>
    </Layout>
  );
}

export default Dashboard;
