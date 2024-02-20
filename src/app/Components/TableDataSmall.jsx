import React from 'react'
const TableData = [
    {
        "Reusable": {
            "Q1-23": "71%",
            "Q2-23": "45%",
        },
        "Natural Resource": {
            "Q1-23": "98%",
            "Q2-23": "54%",
        },
        "Compost Compound": {
            "Q1-23": "87%",
            "Q2-23": "91%",
        },
        "Reusable Material": {
            "Q1-23": "30%",
            "Q2-23": "65%",
        }
    }
];
function TableDataSmall() {
    return (
        
            <table className="smalltable table-auto">
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Q1-23</td>
                        <td>Q2-23</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(TableData[0]).map(product => (
                        <tr key={product}>
                            <td>{product}</td>
                            {Object.keys(TableData[0][product]).map(quarter => (
                                <td key={quarter}>{TableData[0][product][quarter]}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td>Total</td>
                        <td>8%</td>
                        <td>6%</td>
                    </tr>
                </tbody>
            </table>
       

    )
}

export default TableDataSmall