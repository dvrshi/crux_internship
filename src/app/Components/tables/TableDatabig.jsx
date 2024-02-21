const TableData2 = [
    {
        "Reusable": {
            "Q1-23": "71%",
            "Q2-23": "45%",
            "Q3-23": "88%",
            "Q4-23": "62%",
            "Q1-24": "36%"
        },
        "Natural Resource": {
            "Q1-23": "98%",
            "Q2-23": "54%",
            "Q3-23": "77%",
            "Q4-23": "23%",
            "Q1-24": "79%"
        },
        "Compost Compound": {
            "Q1-23": "87%",
            "Q2-23": "91%",
            "Q3-23": "20%",
            "Q4-23": "69%",
            "Q1-24": "41%"
        },
        "Reusable Material": {
            "Q1-23": "30%",
            "Q2-23": "65%",
            "Q3-23": "57%",
            "Q4-23": "79%",
            "Q1-24": "88%"
        }
    }
];
import React from 'react'

function TableDatabig() {
  return (
        <table className="bigtable "  style={{ width: '100%' }}>
            <thead>
                <tr>
                    <td className='text-left'>Product</td>
                    <td>Q1-23</td>
                    <td>Q2-23</td>
                    <td>Q3-23</td>
                    <td>Q4-23</td>
                    <td>Q1-24</td>
                </tr>
            </thead>
            <tbody>
                {Object.keys(TableData2[0]).map(product => (
                    <tr key={product}>
                        <td className='text-left'>{product}</td>
                        {Object.keys(TableData2[0][product]).map(quarter => (
                            <td key={quarter}>{TableData2[0][product][quarter]}</td>
                        ))}
                    </tr>
                ))}
                {Object.keys(TableData2[0]).map(product => (
                    <tr  key={product}>
                        <td className='text-left'>{product}</td>
                        {Object.keys(TableData2[0][product]).map(quarter => (
                            <td key={quarter}>{TableData2[0][product][quarter]}</td>
                        ))}
                    </tr>
                ))}
                {Object.keys(TableData2[0]).map(product => (
                    <tr  key={product}>
                        <td className='text-left'>{product}</td>
                        {Object.keys(TableData2[0][product]).map(quarter => (
                            <td key={quarter}>{TableData2[0][product][quarter]}</td>
                        ))}
                    </tr>
                ))}
                {Object.keys(TableData2[0]).map(product => (
                    <tr  key={product}>
                        <td className='text-left'>{product}</td>
                        {Object.keys(TableData2[0][product]).map(quarter => (
                            <td key={quarter}>{TableData2[0][product][quarter]}</td>
                        ))}
                    </tr>
                ))}
                <tr>
                    <td className='text-left'> Total</td>
                    <td>8%</td>
                    <td>6%</td>
                    <td>7%</td>
                    <td>9%</td>
                    <td>10%</td>
                </tr>
            </tbody>
        </table>
  )
}

export default TableDatabig