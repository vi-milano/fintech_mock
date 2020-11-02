import React from "react";
import "./CardStatement.scss";
import { Card, List } from "antd";
import { Avatar } from "antd";
import {
  PaperClipOutlined,
  MoreOutlined,
  CoffeeOutlined,
  CarOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const chooseLabel = (label: string) => {
  switch (label) {
    case "alimentação":
      return (
        <Avatar
          style={{ color: "#5f5f5f", backgroundColor: "#f3f3f3" }}
          size="large"
          icon={<CoffeeOutlined />}
        />
      );
      break;
    case "transporte":
      return (
        <Avatar
          style={{ color: "#5f5f5f", backgroundColor: "#f3f3f3" }}
          size="large"
          icon={<CarOutlined />}
        />
      );
      break;
    case "outros":
      return (
        <Avatar
          style={{ color: "#5f5f5f", backgroundColor: "#f3f3f3" }}
          size="large"
          icon={<ShoppingOutlined />}
        />
      );
      break;
    case "escritório":
      return (
        <Avatar
          style={{ color: "#5f5f5f", backgroundColor: "#f3f3f3" }}
          size="large"
          icon={<PaperClipOutlined />}
        />
      );
      break;
    default:
      return (
        <Avatar
          style={{ color: "#5f5f5f", backgroundColor: "#f3f3f3" }}
          size="large"
          icon={<MoreOutlined />}
        />
      );
  }
};
function CardStatement(props: any) {
  let { dataSource } = props;
  return (
    <Card
      headStyle={{ fontSize: 20 }}
      style={{ height: "100%" }}
      title="Fatura"
      hoverable
    >
      <List
        dataSource={dataSource}
        renderItem={(d: {
          title: string;
          label: string;
          date: string;
          price: string;
        }) => (
          <List.Item>
            <List.Item.Meta
              avatar={chooseLabel(d.label)}
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
