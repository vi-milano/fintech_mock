import React, { useEffect } from "react";
import "./Dashboard.scss";
import { Card, Col, Layout, Row } from "antd";
import Balance from "./Graphs/Balance/Balance";
import Budget from "./Graphs/Budget/Budget";
import Statement from "./Tables/Statement/Statement";
import Cards from "./Other/Cards/Cards";
import QueueAnim from "rc-queue-anim";
import { BUSCA_QUERY, DASH_ACC_INFO } from "../../../services/MockService";
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
                  props.value > 0
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
  const { loading, data } = useQuery<AccountInfo>(DASH_ACC_INFO);

  return (
    <Layout>
      <Header></Header>

      <Content style={{ margin: "10px 10px 0 10px" }}>
        <QueueAnim
          interval={300}
          component={Row}
          componentProps={{ gutter: [15, 15] }}
        >
          <Placeholder value={data?.accountBalance} title="Saldo" key="d" />
          <Placeholder
            value={data?.creditCardBalance}
            title="Saldo dos cartões"
            key="dd"
          />
          <Placeholder
            value={data?.investmentBalance}
            title="Total em investimentos"
            key="ddd"
          />
          <Placeholder
            value={data?.creditAvailable}
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
            <Cards />
          </Col>
          <Col key="statement" span={12}>
            <Statement />
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

    // <Layout>
    //   <Header style={{ color: "white" }}></Header>
    //   <Content style={{ margin: 10 }}>
    //     <div style={{ margin: "0 auto", maxWidth: "1440px" }}>
    //       <QueueAnim
    //         interval={300}
    //         component={Row}
    //         componentProps={{ gutter: [15, 15] }}
    //       >
    //         <Placeholder value={data?.accountBalance} title="Saldo" key="d" />
    // <Placeholder
    //   value={data?.creditCardBalance}
    //   title="Saldo dos cartões"
    //   key="dd"
    // />
    // <Placeholder
    //   value={data?.investmentBalance}
    //   title="Total em investimentos"
    //   key="ddd"
    // />
    // <Placeholder
    //   value={data?.creditAvailable}
    //   title="Crédito disponível"
    //   key="dddd"
    // />
    //         <Cards key="zzz" />
    //         <Statement key="zz" />
    //         <Balance key="z" />
    //         <Budget key="zzzz" />
    //       </QueueAnim>
    //     </div>
    //   </Content>
    //   <Footer>Fintech Mock @ 2020 by Vitor Milano</Footer>
    // </Layout>
  );
}

export default Dashboard;
