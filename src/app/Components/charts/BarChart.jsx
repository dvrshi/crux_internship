import React from 'react';
import { VictoryChart, VictoryBar, VictoryAxis,VictoryTheme } from 'victory';


const BarChart = ({width,height}) => {
const sampleData = [
        { x: 1, y: 20, fill: "red" },
        { x: 1.5, y: 20, fill: 'orange' },
        { x: 2, y: 30, fill: 'yellow' },
        { x: 2.5, y: 30, fill: 'green' },
        { x: 3, y: 50, fill: 'blue' },
        { x: 3.5, y: 35, fill: 'indigo' },
        { x: 4, y: 40, fill: 'violet' },
        { x: 4.5, y: 55, fill: 'pink' }
    ];

    return (
        <div style={{ width: '100%', height: '100%' }}>
        <VictoryChart
            theme={VictoryTheme.material}
            width={width}
            height={height}
            domainPadding={{ x: 20 }}
            padding={{ top: 10, bottom: 50, left: 80, right: 80 }}
        >
             <VictoryBar
                barWidth={8}
                style={{
                    data: { 
                        fill: ({ datum }) => datum.fill,
                        
                    },
                    
                    
                }}
                data={sampleData}
            />
            <VictoryAxis
                dependentAxis
                tickValues={[0, 10, 20, 30, 40, 50]}
                tickFormat={(t) => `${t}k`}
                style={{
                    tickLabels: { fontSize:35, padding: 10, fill: "#C3C3C3"},
                    grid: { stroke: "#D3D3D3", strokeWidth: 0.5 }, axis: { display: "none" }
                }}
            />
           
        </VictoryChart>
        </div>
    );
}

export default BarChart;
