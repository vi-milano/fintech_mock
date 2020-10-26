import React from "react";
import "./Statement.scss";
import QueueAnim from "rc-queue-anim";
import { Col, Card, Table } from "antd";

function Statement() {
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
      dataIndex: "data",
      key: "data",
    },
    {
      title: "Descrição",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
    },
  ];
  return (
    <Col span={8}>
      <QueueAnim duration={2000}>
        <Card key="k2" title="Extrato">
          <QueueAnim>
            <Table
              key="asa"
              pagination={false}
              dataSource={dataSource}
              columns={columns}
            />
          </QueueAnim>
        </Card>
      </QueueAnim>
    </Col>
  );
}

export default Statement;
