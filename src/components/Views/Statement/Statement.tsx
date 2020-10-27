import React from "react";
import "./Statement.scss";
import { Layout, List } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";

const { Footer, Content } = Layout;
const data = [
  {
    title: "Peça de foguete 1",
  },
  {
    title: "Peça de foguete 2",
  },
  {
    title: "Peça de foguete 3",
  },
  {
    title: "Peça de foguete 4",
  },
  {
    title: "Peça de foguete 11",
  },
  {
    title: "Peça de foguete 21",
  },
  {
    title: "Peça de foguete 31",
  },
  {
    title: "Peça de foguete 41",
  },

  {
    title: "Peça de foguete 42",
  },
  {
    title: "Peça de foguete 12",
  },
  {
    title: "Peça de foguete 22",
  },
  {
    title: "Peça de foguete 32",
  },
  {
    title: "Peça de foguete 42",
  },
];
function Statement() {
  return (
    <Layout>
      <Content>
        <QueueAnim duration={700}>
          <div
            key="state"
            style={{ margin: "0 auto", marginTop: "10vh", width: "50%" }}
          >
            <div
              style={{
                fontSize: 25,
                borderBottom: "2px solid black",
                width: "fit-content",
                marginBottom: 12,
              }}
            >
              Extrato
            </div>
            <div
              className="statement__container"
              style={{
                backgroundColor: "white",
                overflow: "auto",
                height: "67vh",
              }}
            >
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item key={item.title}>
                    <List.Item.Meta
                      avatar={
                        <DollarOutlined
                          style={{
                            fontSize: "2.2em",
                            marginTop: 8,
                            marginLeft: 24,
                          }}
                        />
                      }
                      title={<a href="#">{item.title}</a>}
                      description="10/10/2020"
                    />
                    <div style={{ fontWeight: "bold", marginRight: 20 }}>
                      R$10.000
                    </div>
                  </List.Item>
                )}
              />
            </div>
          </div>
        </QueueAnim>
      </Content>
      <Footer>Fintech Mock @ 2020 by Vitor Milano</Footer>
    </Layout>
  );
}

export default Statement;
