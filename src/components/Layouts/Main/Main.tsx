import React, { useState } from "react";
import "./Main.scss";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  FileOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function Main(props: any) {
  let [collapsed, setCollapsed] = useState(true);
  return (
    <Layout className="layout__container">
      <Sider collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["dashboard"]} mode="inline">
          <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="extrato" icon={<FileOutlined />}>
            <Link to="/extrato">Extrato</Link>
          </Menu.Item>
          <Menu.Item key="cartoes" icon={<CreditCardOutlined />}>
            <Link to="/cartoes">Cartões</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      {props.children}
    </Layout>
  );
}

export default Main;
