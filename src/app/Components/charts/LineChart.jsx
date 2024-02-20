import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
  [
    { "x": 0, "y": 20 },
    { "x": 1, "y": 25 },
    { "x": 2, "y": 35 },
    { "x": 3, "y": 15 },
    { "x": 4, "y": 45 },
  ],
  [
    { "x": 0, "y": 30 },
    { "x": 1, "y": 15 },
    { "x": 2, "y": 20 },
    { "x": 3, "y": 20 },
    { "x": 4, "y": 25 },
  ],
];

const LineChart = ({ width, height, axiscolor, showXAxisLabels = true }) => {
  return (
    <div>
      <VictoryChart
        id="test"
        theme={VictoryTheme.material}
        width={width}
        height={height}
        padding={{ top: 50, bottom: 150, left: 80, right: 80 }}
      >
        <VictoryLine
          style={{ data: { stroke: "green", strokeWidth: 10 } }}
          data={data[0]}
        />
        <VictoryLine
          style={{ data: { stroke: "blue", strokeWidth: 10 } }}
          data={data[1]}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[10, 20, 30, 40, 50]}
          tickFormat={(t) => `${Math.round(t)}k`}
          style={{
            tickLabels: { fontSize: 20, padding: 10, fill: axiscolor },
            grid: { stroke: "", strokeWidth: 0.5 }, axis: { display: "none" }
          }}
        />

        <VictoryAxis
          tickValues={showXAxisLabels ? [1, 2, 3, 4] : []} // specify the x-values where you want the ticks
          tickFormat={showXAxisLabels ? ["Google", "Instagram", "Facebook", "TikTok"] : undefined}
          style={{
            tickLabels: {
              angle: -90,
              verticalAnchor: "middle",
              textAnchor: "end",
              fontSize: 25,
              fill: axiscolor
            },
            grid: { stroke: "grey", strokeWidth: 0.5 },
            axis: { display: "none" },
          }}
        />

      </VictoryChart>
    </div>
  );
};

export default LineChart;
