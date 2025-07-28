import React from 'react'
import { FaSearch } from "react-icons/fa";


const transactions = [
    {
        date: '2025-07-20',
        type: 'Income',
        amount: '+ 50,000',
        asset: '$SEED',
        note: 'Marketplace Fees',
    },
    {
        date: '2025-07-20',
        type: 'Outflow',
        amount: '- 50,000',
        asset: '$SEED',
        note: 'Marketplace Fees',
    },
    {
        date: '2025-07-20',
        type: 'Income',
        amount: '+ 50,000',
        asset: '$SEED',
        note: 'Marketplace Fees',
    },
    {
        date: '2025-07-20',
        type: 'Outflow',
        amount: '- 50,000',
        asset: '$SEED',
        note: 'Marketplace Fees',
    }, {
        date: '2025-07-20',
        type: 'Income',
        amount: '+ 50,000',
        asset: '$SEED',
        note: 'Marketplace Fees',
    },
    {
        date: '2025-07-20',
        type: 'Outflow',
        amount: '- 50,000',
        asset: '$SEED',
        note: 'Marketplace Fees',
    },
];

function TreasuryTable() {
    return (
        <div className="glass_card transaction_history">
            <p className="transaction_heading">Transaction History</p>

            <div className="transaction_controls">
                <div className="search_box">
                    <input type="text" placeholder="Search..." className="search_input" />
                    <FaSearch className="search_icon" />
                </div>

                <div className="filter_controls">
                    <select className="filter_select">
                        <option>Asset</option>
                        <option>$SEED</option>
                        <option>$aCO₂</option>
                        <option>Stablecoins</option>
                    </select>
                    <select className="filter_select">
                        <option>Type</option>
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                </div>
            </div>

            <table className="transaction_table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Asset</th>
                        <th>Marketplace Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((txn, index) => (
                        <tr key={index}>
                            <td>{txn.date}</td>
                            <td>{txn.type}</td>
                            <td className={txn.amount.startsWith('+') ? 'amount_in' : 'amount_out'}>
                                {txn.amount}
                            </td>
                            <td>{txn.asset}</td>
                            <td>{txn.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
}

export default TreasuryTable