import React from "react";
import "./Cards.scss";
import QueueAnim from "rc-queue-anim";
import { Col, Card } from "antd";
import { TableOutlined } from "@ant-design/icons";

function Cards() {
  return (
    <Col>
      <QueueAnim duration={2000}>
        <Card key="k5" title="Cartões">
          <div className="creditcard__container">
            <div className="creditcard__body">
              <div className="creditcard__body--provider">Nome do Provedor</div>
              <div className="creditcard__body--decoration">
                <TableOutlined />
              </div>
              <div className="creditcard__body--number">
                **** **** **** 1313
              </div>
              <div className="creditcard__body--data">
                <div className="creditcard__data--name">Vitor Milano</div>
                <div className="creditcard__data--date">10/20</div>
                <div className="creditcard__data--label">VISA</div>
              </div>
            </div>
            <div className="creditcard__info">
              <ul>
                <li>Limite: 1000</li>
                <li>Data de fechamento: 10/10/2020</li>
                <li>Limite disponível: 400</li>
                <li>Fatura atual: 600</li>
              </ul>
            </div>
          </div>
        </Card>
      </QueueAnim>
    </Col>
  );
}

export default Cards;
