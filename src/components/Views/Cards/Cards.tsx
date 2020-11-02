import React, { useState } from "react";
import "./Cards.scss";
import { Card, Col, Layout, Row } from "antd";
import QueueAnim from "rc-queue-anim";
import CardStatement from "./CardStatement/CardStatement";
import { useQuery } from "@apollo/client";
import { CARD_INFO } from "../../../services/MockService";
import CardGraph from "./CardGraph/CardGraph";
import CardOverview from "./CardOverview/CardOverview";

const { Content } = Layout;

function Cards() {
  const { data, loading } = useQuery(CARD_INFO);
  const [activeCard, setActiveCard] = useState(0);

  return (
    <Layout>
      <Content style={{ margin: "10px 10px 0 10px" }}>
        <QueueAnim
          interval={300}
          component={Row}
          componentProps={{ gutter: [15, 15], style: { height: "100%" } }}
        >
          <QueueAnim
            delay={300}
            interval={300}
            component={Col}
            componentProps={{ key: "col-1", span: 12 }}
          >
            <Row key="row-1" gutter={[10, 10]} style={{ height: "50%" }}>
              <Col span={24}>
                {!loading ? (
                  <CardOverview
                    data={data}
                    activeCard={activeCard}
                    change={setActiveCard}
                  />
                ) : null}
              </Col>
            </Row>
            <Row key="row-2" style={{ height: "50%" }}>
              <Col span={24}>
                <Card
                  style={{
                    height: "100%",
                  }}
                  bodyStyle={{
                    height: "80%",
                  }}
                  headStyle={{ fontSize: 20 }}
                  title="Gastos mensais"
                >
                  <CardGraph />
                </Card>
              </Col>
            </Row>
          </QueueAnim>
          <Col key="col-2" span={12}>
            {!loading ? (
              <CardStatement dataSource={data.cards[activeCard]["extrato"]} />
            ) : null}
          </Col>
        </QueueAnim>
      </Content>
    </Layout>
  );
}

export default Cards;
