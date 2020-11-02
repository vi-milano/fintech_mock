import React from "react";
import { Card, Select } from "antd";
import "./CardOverview.scss";
import NumberFormat from "react-number-format";
function CardOverview(props: any) {
  let { data, change, activeCard } = props;
  let cards = data.cards;
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
        <Select
          onChange={(value) => {
            change(Number(value));
          }}
          defaultValue="0"
        >
          <Option value="0">
            {cards[0].label}****{cards[0].final}
          </Option>
          <Option value="1">
            {cards[1].label}****{cards[1].final}
          </Option>
        </Select>
      }
    >
      <div className="creditcard__container">
        <div
          className={`creditcard__body ${cards[activeCard].banco
            .toLowerCase()
            .replace(" ", "_")}`}
        >
          <div className="creditcard__body--provider">
            {cards[activeCard].banco}
          </div>
          <div className="creditcard__body--decoration">
            <img style={{ height: 35 }} src={"/chip.png"} />
          </div>
          <div className="creditcard__body--number">
            **** **** **** {cards[activeCard].final}
          </div>
          <div className="creditcard__body--data">
            <div className="creditcard__data--name">
              {cards[activeCard].titular}
            </div>
            <div className="creditcard__data--date">
              {cards[activeCard].dataVencimento}
            </div>
            <div className="creditcard__data--label">
              {cards[activeCard].label}
            </div>
          </div>
        </div>
        <div className="creditcard__info">
          <ul>
            <li>
              Limite:{" "}
              <NumberFormat
                decimalScale={2}
                fixedDecimalScale={true}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"R$"}
                displayType={"text"}
                value={cards[activeCard].limite}
                renderText={(value) => (
                  <span style={{ fontWeight: "bold" }}>{value}</span>
                )}
              />
            </li>
            <li>
              Data de fechamento:{" "}
              <span style={{ fontWeight: "bold" }}>
                {cards[activeCard].dataVencimento}
              </span>
            </li>
            <li>
              Limite disponível:{" "}
              <NumberFormat
                decimalScale={2}
                fixedDecimalScale={true}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"R$"}
                displayType={"text"}
                value={cards[activeCard].limite - cards[activeCard].saldo}
                renderText={(value) => (
                  <span style={{ fontWeight: "bold" }}>{value}</span>
                )}
              />
            </li>
            <li>
              Fatura atual:{" "}
              <NumberFormat
                decimalScale={2}
                fixedDecimalScale={true}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"R$"}
                displayType={"text"}
                value={cards[activeCard].saldo}
                renderText={(value) => (
                  <span style={{ fontWeight: "bold" }}>{value}</span>
                )}
              />
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default CardOverview;
