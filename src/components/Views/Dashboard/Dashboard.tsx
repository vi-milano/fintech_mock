import React, { useEffect } from "react";
import "./Dashboard.scss";
import { Card, Col, Layout, Row } from "antd";
import Balance from "./Graphs/Balance/Balance";
import Budget from "./Graphs/Budget/Budget";
import Statement from "./Tables/Statement/Statement";
import Cards from "./Other/Cards/Cards";
import QueueAnim from "rc-queue-anim";
import {
  BUSCA_QUERY,
  DASH_ACC_INFO,
  SMALL_STATE,
  CARD_INFO,
} from "../../../services/MockService";
import { gql, useQuery } from "@apollo/client";
import NumberFormat from "react-number-format";

const { Header, Footer, Content } = Layout;

function Placeholder(props: any) {
  // useEffect(() => {
  //   buscaX().then((r) => console.log(r));
  // });
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

interface User {
  username: string;
  firstName: string;
}

interface AccountInfo {
  accountBalance: string;
  creditCardBalance: string;
  investmentBalance: string;
  creditAvailable: string;
}

function Dashboard() {
  const accInfo = useQuery<AccountInfo>(DASH_ACC_INFO);
  const stateInfo = useQuery(SMALL_STATE);
  const cardInfo = useQuery(CARD_INFO);

  return (
    <Layout>
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
            <Cards data={cardInfo.data} />
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
