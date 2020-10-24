import React, { useState } from "react";
import "./Main.scss";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  FileOutlined,
  QuestionCircleOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function Main() {
  let [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => {
          setCollapsed(!collapsed);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<FileOutlined />}>
            Extrato
          </Menu.Item>
          <Menu.Item key="3" icon={<CreditCardOutlined />}>
            Cartões
          </Menu.Item>
          <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
            Sobre
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <div style={{ paddingLeft: 24, color: "white" }}>
            Here goes the header.
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            Here goes the dashboard.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Fintech Mock ©2020 Created by Vitor Milano
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Main;
