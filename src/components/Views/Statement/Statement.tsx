import React, { useEffect, useState } from "react";
import "./Statement.scss";
import { Card, Col, Layout, Tag, Row } from "antd";
import {
  RetweetOutlined,
  CreditCardOutlined,
  BarcodeOutlined,
  DollarOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import { useQuery } from "@apollo/client";
import { FULL_STATE } from "../../../services/MockService";
import StatementGraph from "./StatementGraph/StatementGraph";
import StatementItem from "./StatementItem/StatementItem";
import StatementBalance from "./StatementBalance/StatementBalance";
import StatementHeaderButton from "./StatementHeaderButton/StatementHeaderButton";

const { Content } = Layout;

function Statement() {
  const { data, loading, refetch } = useQuery(FULL_STATE, {
    fetchPolicy: "no-cache",
  });

  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (filter) {
      refetch({ filter: filter });
    }
  }, [loading, filter]);

  return (
    <Layout>
      <QueueAnim
        interval={400}
        component={Content}
        componentProps={{
          style: { display: "flex", flexDirection: "column", padding: 16 },
        }}
      >
        <Row gutter={[16, 10]}>
          <Col style={{ width: "100%" }} span={24}>
            <Card
              bodyStyle={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <StatementHeaderButton
                title="Todos"
                color="navy"
                icon={<BarsOutlined />}
                filter="todos"
                change={setFilter}
              />
              <StatementHeaderButton
                title="Créditos"
                color="limegreen"
                icon={<ShrinkOutlined />}
                filter="creditos"
                change={setFilter}
              />
              <StatementHeaderButton
                title="Débitos"
                color="red"
                icon={<ArrowsAltOutlined />}
                filter="debitos"
                change={setFilter}
              />
              <StatementHeaderButton
                title="Boletos"
                color="black"
                icon={<BarcodeOutlined />}
                filter="boletos"
                change={setFilter}
              />
              <StatementHeaderButton
                title="Cartões"
                color="darkviolet"
                icon={<CreditCardOutlined />}
                filter="cartões"
                change={setFilter}
              />
              <StatementHeaderButton
                title="Transferências"
                color="firebrick"
                icon={<RetweetOutlined />}
                filter="transferências"
                change={setFilter}
              />
              <StatementHeaderButton
                title="Rendimentos"
                color="green"
                icon={<DollarOutlined />}
                filter="rendimentos"
                change={setFilter}
              />
            </Card>
          </Col>
        </Row>

        <QueueAnim
          key="b"
          component={Row}
          interval={400}
          componentProps={{
            style: { flexGrow: 1 },
            gutter: [16, 16],
          }}
        >
          <Col key="a1" span={14}>
            <Card
              title="Extrato"
              headStyle={{ fontSize: 20 }}
              bodyStyle={{ overflowY: "scroll", height: 680, marginTop: 1 }}
              style={{ height: "100%" }}
              hoverable
            >
              {!loading && data
                ? data.entry.map((d: any) => (
                    <StatementItem loading={loading} data={d} />
                  ))
                : null}
            </Card>
          </Col>
          <Col key="a2" span={10}>
            <Card
              title="Resumo mensal"
              headStyle={{ fontSize: 20 }}
              style={{ height: "100%" }}
              hoverable
            >
              <div style={{ height: "50%" }}>
                <StatementBalance />
              </div>
              <div style={{ height: "500px" }}>
                <StatementGraph />
              </div>
            </Card>
          </Col>
        </QueueAnim>
      </QueueAnim>
    </Layout>
  );
}

export default Statement;
