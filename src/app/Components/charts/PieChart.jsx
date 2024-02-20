import React from 'react'
import { VictoryPie } from 'victory'
function PieChart() {
    return (
        <div>
            <svg viewBox={'10 40 350 350'} width={200} height={150}>
                <VictoryPie
                    standalone={false}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 1, y: 4 }
                    ]}
                    innerRadius={100}
                    labelComponent={null}
                />
                <text
                    x="55%"
                    y="55%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="35"
                    fontFamily="Arial"
                    fill="black"
                >
                   89,000
                </text>
                <text
                    x="55%"
                    y="65%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="27"
                    fontFamily="Arial"
                    fill="gray"
                >
                   orders
                </text>

            </svg>
        </div>
    )
}

export default PieChart