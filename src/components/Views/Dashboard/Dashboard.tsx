import React from "react";
import "./Dashboard.scss";
import { Layout, Row } from "antd";
import Balance from "./Graphs/Balance/Balance";
import Statement from "./Tables/Statement/Statement";
const { Header, Footer, Content } = Layout;

function Dashboard() {
  return (
    <Layout>
      <Header style={{ color: "white" }}> Here goes the header</Header>
      <Content>
        <div style={{ margin: "0 auto", maxWidth: "1440px" }}>
          <Row style={{ padding: "16px 16px" }} gutter={16}>
            <Balance />
            <Statement />
          </Row>
        </div>
      </Content>
      <Footer>Fintech Mock @ 2020 by Vitor Milano</Footer>
    </Layout>
  );
}

export default Dashboard;
