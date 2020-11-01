import React from "react";
import "./Statement.scss";
import QueueAnim from "rc-queue-anim";
import { Col, Card, Table } from "antd";
import NumberFormat from "react-number-format";

function Statement(props: any) {
  const dataSource = [
    {
      key: "1",
      data: "10/03/2020",
      desc: "McDonald's Paulista",
      valor: "- R$ 14,00",
    },
    {
      key: "2",
      data: "15/05/2020",
      desc: "Depósito Itaú",
      valor: "+ R$ 400,00",
    },
    {
      key: "3",
      data: "10/03/2020",
      desc: "Peças Automotivas",
      valor: "- R$ 390,00",
    },
    {
      key: "4",
      data: "15/05/2020",
      desc: "Pagamento de cliente",
      valor: "+ R$ 320,00",
    },
  ];

  const columns = [
    {
      title: "Data",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Descrição",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Valor",
      dataIndex: "value",
      key: "value",
      render: (value: any) => (
        <NumberFormat
          decimalScale={2}
          fixedDecimalScale={true}
          thousandSeparator={"."}
          decimalSeparator={","}
          prefix={"R$"}
          displayType={"text"}
          value={value}
          renderText={(v) => {
            return (
              <span
                style={
                  value[0] !== "-"
                    ? { fontWeight: "bold", color: "green" }
                    : { fontWeight: "bold", color: "red" }
                }
              >
                {v}
              </span>
            );
          }}
        />
      ),
    },
  ];
  return (
    <Card
      size="small"
      headStyle={{ fontSize: 20 }}
      hoverable
      bodyStyle={{ height: 250, display: "flex", alignItems: "center" }}
      key="k2"
      title="Últimas transações"
    >
      <Table
        key="asa"
        pagination={false}
        size="small"
        style={{ width: "100%" }}
        dataSource={props.data.entry}
        columns={columns}
      />
    </Card>
  );
}

export default Statement;
