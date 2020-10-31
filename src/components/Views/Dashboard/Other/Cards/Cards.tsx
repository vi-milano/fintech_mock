import React from "react";
import "./Cards.scss";
import { Col, Card, Select } from "antd";
import { TableOutlined } from "@ant-design/icons";

function Cards() {
  const { Option } = Select;

  return (
    <Card
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
      bodyStyle={{ flexGrow: 1, display: "flex", alignItems: "center" }}
      headStyle={{ fontSize: 20 }}
      hoverable
      key="k5"
      title="Cartões"
      extra={
        <Select defaultValue="lucy">
          <Option value="lucy">VISA ****1313</Option>
          <Option value="exz">ELO ****4123</Option>
        </Select>
      }
    >
      <div className="xcreditcard__container">
        <div className="xcreditcard__body">
          <div className="xcreditcard__body--provider">Nu Bank</div>
          <div className="xcreditcard__body--decoration">XXX</div>
          <div className="xcreditcard__body--number">**** **** **** 1313</div>
          <div className="xcreditcard__body--data">
            <div className="xcreditcard__data--name">Vitor Milano</div>
            <div className="xcreditcard__data--date">10/20</div>
            <div className="xcreditcard__data--label">VISA</div>
          </div>
        </div>
        <div className="xcreditcard__info">
          <ul>
            <li>Limite: 1000</li>
            <li>Data de fechamento: 10/10/2020</li>
            <li>Limite disponível: 400</li>
            <li>Fatura atual: 600</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default Cards;
