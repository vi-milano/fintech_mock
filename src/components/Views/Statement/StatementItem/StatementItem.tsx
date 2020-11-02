import React from "react";
import "./StatementItem.scss";
import { Card, Col, Row, Tag } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import {
  SwapOutlined,
  RetweetOutlined,
  CreditCardOutlined,
  BarcodeOutlined,
  DollarOutlined,
  MoreOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import NumberFormat from "react-number-format";

function StatementItem(props: any) {
  const { data, loading } = props;

  const chooseTag = (categoria: string) => {
    switch (categoria) {
      case "alimentação":
        return <Tag color="green">Alimentação</Tag>;
        break;
      case "escritório":
        return <Tag color="purple">Escritório</Tag>;
        break;
      case "material":
        return <Tag color="magenta">Material</Tag>;
        break;
      case "impostos":
        return <Tag color="orange">Impostos</Tag>;
        break;
      case "salario":
        return <Tag color="geekblue">Salário</Tag>;
        break;
      default:
        return <Tag>Sem categoria</Tag>;
    }
  };
  const chooseFlag = (flag: string) => {
    switch (flag) {
      case "debito":
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<CreditCardOutlined />}
          />
        );
        break;
      case "transferencia":
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<SwapOutlined />}
          />
        );
        break;
      case "rendimento":
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<DollarOutlined />}
          />
        );
        break;
      case "boleto":
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<BarcodeOutlined />}
          />
        );
        break;
      default:
        return (
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={<MoreOutlined />}
          />
        );
    }
  };

  return (
    <Card
      size="small"
      style={{ margin: "4px auto " }}
      bodyStyle={{ display: "flex" }}
    >
      <Row style={{ width: "100%" }}>
        <Col
          span={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{ color: "black", backgroundColor: "transparent" }}
            size={65}
            icon={chooseFlag(data.flag)}
          />
        </Col>
        <Col style={{ paddingLeft: 10 }} span={15}>
          <div style={{ fontSize: 16, fontWeight: "bold" }}>{data.desc}</div>
          <div>{data.date}</div>
          {chooseTag(data.categoria)}
        </Col>
        <Col span={6} style={{ display: "flex", alignItems: "center" }}>
          <NumberFormat
            decimalScale={2}
            fixedDecimalScale={true}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={"R$"}
            displayType={"text"}
            value={data.value}
            renderText={(value) => (
              <span
                style={
                  !loading && data.value[0] !== "-"
                    ? { fontSize: 20, fontWeight: "bold", color: "green" }
                    : { fontSize: 20, fontWeight: "bold", color: "red" }
                }
              >
                {value}
              </span>
            )}
          />
        </Col>
      </Row>
    </Card>
  );
}
export default StatementItem;
