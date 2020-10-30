import React from "react";
import "./CardStatement.scss";
import { Card, List } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import { Avatar } from "antd";

const dataSource = [
  {
    title: "Netflix",
    date: "10-03-2020",
    price: "R$20.102,03",
  },
  {
    title: "McDonald's",
    date: "10-03-2020",
    price: "R$3.102,33",
  },
  {
    title: "Posto de Gasolina",
    date: "10-03-2020",
    price: "R$2.102,42",
  },
  {
    title: "Máquina de lavar",
    date: "10-03-2020",
    price: "R$27.321,13",
  },
  {
    title: "Netflix",
    date: "10-03-2020",
    price: "R$20.102,03",
  },
  {
    title: "McDonald's",
    date: "10-03-2020",
    price: "R$3.102,33",
  },
  {
    title: "Posto de Gasolina",
    date: "10-03-2020",
    price: "R$2.102,42",
  },
  {
    title: "Máquina de lavar",
    date: "10-03-2020",
    price: "R$27.321,13",
  },
  {
    title: "Netflix",
    date: "10-03-2020",
    price: "R$20.102,03",
  },
];

function CardStatement() {
  return (
    <Card style={{ height: "100%" }} title="Extrato" hoverable>
      <List
        dataSource={dataSource}
        renderItem={(d) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size="large" icon={<EllipsisOutlined />} />}
              title={<span>{d.title}</span>}
              description={d.date}
            />
            <span style={{ fontWeight: "bold" }}>{d.price}</span>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default CardStatement;
