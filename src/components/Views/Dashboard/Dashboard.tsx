import React, { useState } from "react";
import "./Dashboard.scss";
import { Card, Col, Dropdown, Layout, Menu, Row } from "antd";
import Balance from "./Graphs/Balance/Balance";
import Budget from "./Graphs/Budget/Budget";
import Statement from "./Tables/Statement/Statement";
import Cards from "./Other/Cards/Cards";
import QueueAnim from "rc-queue-anim";
import {
  DASH_ACC_INFO,
  SMALL_STATE,
  CARD_INFO,
} from "../../../services/MockService";
import { useQuery } from "@apollo/client";
import NumberFormat from "react-number-format";
import Avatar from "antd/lib/avatar/avatar";
import { DownOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";

const { Header, Content } = Layout;

function Placeholder(props: any) {
  return (
    <Col span={6}>
      <Card
        headStyle={{ fontSize: 20 }}
        bodyStyle={{ height: 100, display: "flex", alignItems: "center" }}
        size="small"
        hoverable
        key="adada"
        title={props.title}
      >
        <div style={{ fontSize: 30 }}>
          <NumberFormat
            decimalScale={2}
            fixedDecimalScale={true}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={"R$"}
            displayType={"text"}
            value={props.value}
            renderText={(value) => (
              <span
                style={
                  !props.isLoading && props.value[0] !== "-"
                    ? { fontWeight: "bold", color: "green" }
                    : { fontWeight: "bold", color: "red" }
                }
              >
                {value}
              </span>
            )}
          />
        </div>
      </Card>
    </Col>
  );
}

interface AccountInfo {
  accountBalance: string;
  creditCardBalance: string;
  investmentBalance: string;
  creditAvailable: string;
}

function AboutModal(props: any) {
  const { visible, handleOk, handleCancel } = props;
  return (
    <>
      <Modal
        centered
        title={<span style={{ fontSize: 24 }}>Dados da empresa</span>}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          <span style={{ fontWeight: "bold" }}>Nome:</span> Estrela Platina
          Alimentos Ltda
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>CNPJ:</span> 28.433.294/0001-64
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Inscrição Estadual:</span>{" "}
          540.472.404.569
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Data de Abertura:</span>{" "}
          25/06/2015
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>CEP:</span> 14784-349
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Endereço:</span> Avenida Ranulfo
          Prata 997
        </p>
      </Modal>
    </>
  );
}

function Dashboard() {
  const [visible, setVisible] = useState(false);
  const accInfo = useQuery<AccountInfo>(DASH_ACC_INFO);
  const stateInfo = useQuery(SMALL_STATE);
  const cardInfo = useQuery(CARD_INFO);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            showModal();
          }}
        >
          Dados da empresa
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Alterar meus dados</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Sair</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <AboutModal
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        visible={visible}
      />
      <Header style={{ color: "white", height: 50 }}>
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{ color: "#5f5f5f", backgroundColor: "#f3f3f3" }}
            size="large"
            src={"/serious_dog.png"}
          />
          <Dropdown overlay={menu} trigger={["click"]}>
            <div
              className="ant-dropdown-link"
              style={{
                height: "100%",
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
              }}
              onClick={(e) => e.preventDefault()}
            >
              <span
                style={{ color: "white", paddingLeft: 10, paddingRight: 5 }}
              >
                Vitor Milano
              </span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </Header>
      <Content style={{ margin: "10px 10px 0 10px" }}>
        <QueueAnim
          interval={300}
          component={Row}
          componentProps={{ gutter: [15, 15] }}
        >
          <Placeholder
            value={accInfo.data?.accountBalance}
            isLoading={accInfo.loading}
            title="Saldo"
            key="d"
          />
          <Placeholder
            value={accInfo.data?.creditCardBalance}
            isLoading={accInfo.loading}
            title="Saldo dos cartões"
            key="dd"
          />
          <Placeholder
            value={accInfo.data?.investmentBalance}
            isLoading={accInfo.loading}
            title="Total em investimentos"
            key="ddd"
          />
          <Placeholder
            value={accInfo.data?.creditAvailable}
            isLoading={accInfo.loading}
            title="Crédito disponível"
            key="dddd"
          />
        </QueueAnim>
        <QueueAnim
          interval={300}
          delay={1200}
          component={Row}
          componentProps={{ gutter: [15, 15] }}
        >
          <Col key="cards" span={12}>
            <Cards data={cardInfo} />
          </Col>
          <Col key="statement" span={12}>
            <Statement data={stateInfo.data} />
          </Col>
        </QueueAnim>
        <QueueAnim
          interval={300}
          delay={1800}
          component={Row}
          componentProps={{ gutter: [15, 15] }}
        >
          <Col key="balance" span={12}>
            <Balance />
          </Col>
          <Col key="budget" span={12}>
            <Budget />
          </Col>
        </QueueAnim>
      </Content>
    </Layout>
  );
}

export default Dashboard;
