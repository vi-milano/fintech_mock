import React, { ReactNode } from "react";
import "./StatementHeaderButton.scss";
import { Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
function StatementHeaderButton(props: {
  title: string;
  color: string;
  icon: ReactNode;
  filter: string;
  change: Function;
}) {
  const { title, icon, color, change, filter } = props;
  return (
    <Card
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
        width: 100,
      }}
      hoverable
      bordered={false}
      onClick={() => {
        change(filter);
      }}
    >
      {
        <Avatar
          style={{ color: color, backgroundColor: "#f3f3f3" }}
          size="large"
          icon={icon}
        />
      }
      <div>{title}</div>
    </Card>
  );
}
export default StatementHeaderButton;
