import React from 'react'
import { FaSearch } from "react-icons/fa";
import "./Proposals.css"

const myProposalsTable = [
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'N/A',
    Total_Votes: '950',
    date: '2025-07-20',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Closed',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '2025-07-20',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '2025-07-20',
  },

];

const allCommunityProposalsTable = [
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'N/A',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Closed',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  }, {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Closed',
    Outcome: 'Fail',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  }, {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Closed',
    Outcome: 'Fail',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  },
  {
    id: '#006',
    Titile: 'Community Tree Planting Initiative',
    Status: 'Active',
    Outcome: 'Pass',
    Total_Votes: '950',
    date: '3 Days, 10 Hours',
  },

];

function Proposals() {
  return (
    <div className="proposals_wrapper">
      {/* My Proposals */}
      <div className="glass_card proposals_section">
        <p className="proposals_title">My Proposals</p>

        <div className="proposals_controls">
          <div className="proposals_search">
            <input type="text" placeholder="Search..." className="proposals_input" />
            <FaSearch className="proposals_search_icon" />
          </div>

          <div className="proposals_filters">
            <select className="proposals_select">
              <option>Asset</option>
              <option>$SEED</option>
              <option>$aCO₂</option>
              <option>Stablecoins</option>
            </select>
            <select className="proposals_select">
              <option>Title</option>
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>
        </div>

        <table className="proposals_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Outcome</th>
              <th>Total Votes</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            {myProposalsTable.map((txn, index) => (
              <tr key={index}>
                <td>{txn.id}</td>
                <td>{txn.Titile}</td>
                <td className={`status_cell ${txn.Status.toLowerCase()}`}>
                  <button className='status_btn'> {txn.Status}</button>
                </td>
                <td className={`outcome_cell ${txn.Outcome.toLowerCase()}`}>
                  {txn.Outcome}
                </td>
                <td>{txn.Total_Votes}</td>
                <td>{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* All Community Proposals */}
      <div className="glass_card proposals_section">
        <p className="proposals_title">All Community Proposals</p>

        <div className="proposals_controls">
          <div className="proposals_search">
            <input type="text" placeholder="Search..." className="proposals_input" />
            <FaSearch className="proposals_search_icon" />
          </div>

          <div className="proposals_filters">
            <select className="proposals_select">
              <option>Asset</option>
              <option>$SEED</option>
              <option>$aCO₂</option>
              <option>Stablecoins</option>
            </select>
            <select className="proposals_select">
              <option>Title</option>
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>
        </div>

        <table className="proposals_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Outcome</th>
              <th>Total Votes</th>
              <th>Ends In</th>
            </tr>
          </thead>
          <tbody>
            {allCommunityProposalsTable.map((txn, index) => (
              <tr key={index}>
                <td>{txn.id}</td>
                <td>{txn.Titile}</td>
                <td className={`status_cell ${txn.Status.toLowerCase()}`}>
                  <button className='status_btn'> {txn.Status}</button>
                </td>
                <td className={`outcome_cell ${txn.Outcome.toLowerCase()}`}>
                  {txn.Outcome}
                </td>
                <td>{txn.Total_Votes}</td>
                <td>{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Proposals