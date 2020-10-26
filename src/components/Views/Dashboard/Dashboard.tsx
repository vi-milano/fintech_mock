import React from "react";
import "./Dashboard.scss";
import QueueAnim from "rc-queue-anim";
import { Layout, Row, Col } from "antd";

const { Header, Footer, Content } = Layout;

function Dashboard() {
  return (
    <Layout>
      <Header style={{ color: "white" }}> Here goes the header</Header>
      <Content>
        <QueueAnim type={["right", "left"]}>
          <Row key="1">
            <Col span={24}>
              <div>Row</div>
            </Col>
          </Row>
        </QueueAnim>
      </Content>
      <Footer>Fintech Mock @ 2020 by Vitor Milano</Footer>
    </Layout>
  );
}

export default Dashboard;
