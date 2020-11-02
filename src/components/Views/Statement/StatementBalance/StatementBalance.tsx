import React from "react";
import "./StatementBalance.scss";
import { Card, Col, Row, Tag } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { RetweetOutlined } from "@ant-design/icons";

function StatementBalance() {
  return (
    <Card
      size="small"
      style={{ margin: "4px auto " }}
      bodyStyle={{
        display: "flex",
      }}
    >
      <Row style={{ width: "100%" }}>
        <Col
          span={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<RetweetOutlined />}
          />
        </Col>
        <Col
          span={10}
          style={{
            paddingLeft: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: "bold" }}>Entradas</div>
          <div style={{ fontSize: 18, fontWeight: "bold", color: "green" }}>
            R$ 12.460,00
          </div>
        </Col>
        <Col
          span={10}
          style={{
            paddingLeft: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: "bold" }}>Saídas</div>
          <div style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
            R$ 9.320,00
          </div>
        </Col>
      </Row>
    </Card>
  );
}
export default StatementBalance;
