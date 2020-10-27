import React from "react";
import "./Budget.scss";
import QueueAnim from "rc-queue-anim";
import { Col, Card } from "antd";
import { VictoryLegend, VictoryPie, VictoryTooltip } from "victory";

function Budget() {
  const data = [
    { x: "Alimentação", y: 200 },
    { x: "Fornecedores", y: 105 },
    { x: "Escritório", y: 310 },
  ];

  return (
    <Col>
      <QueueAnim duration={2000}>
        <Card bodyStyle={{ height: 250 }} hoverable key="k21" title="Orçamento">
          <div className="budget__container">
            <div style={{ width: "300px" }}>
              <svg width={300} height={200}>
                <VictoryPie
                  animate={{
                    duration: 1000,
                    onLoad: { duration: 1000 },
                  }}
                  events={[
                    {
                      target: "data",
                      eventHandlers: {
                        onMouseEnter: () => {
                          return [
                            {
                              target: "data",
                              mutation: (props) => {
                                return { radius: 85 };
                              },
                            },
                          ];
                        },
                        onMouseLeave: () => {
                          return [
                            {
                              target: "data",
                              mutation: (props) => {
                                return { radius: 80 };
                              },
                            },
                          ];
                        },
                      },
                    },
                  ]}
                  standalone={false}
                  padAngle={5}
                  width={300}
                  height={200}
                  innerRadius={50}
                  padding={{
                    left: 100,
                    bottom: 20,
                    top: 20,
                  }}
                  colorScale="qualitative"
                  data={data}
                  labels={({ datum }) => {
                    return `${Math.round((datum.y / 615) * 100)}%`;
                  }}
                  labelComponent={
                    <VictoryTooltip
                      center={{ x: 200, y: 100 }}
                      pointerLength={0}
                      flyoutStyle={{ strokeOpacity: 0, fill: "transparent" }}
                    />
                  }
                />
                <VictoryLegend
                  standalone={false}
                  colorScale="qualitative"
                  x={0}
                  y={10}
                  gutter={20}
                  centerTitle
                  data={data.map((d) => {
                    return { name: d.x };
                  })}
                />
              </svg>
            </div>
          </div>
        </Card>
      </QueueAnim>
    </Col>
  );
}

export default Budget;
