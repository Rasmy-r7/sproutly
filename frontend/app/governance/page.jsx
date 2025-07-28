'use client';

import PageHeader from '@/components/pageHeader/PageHeader'
import React, { useState } from 'react'
import "./Governance.css"
import Overview from './components/overview/Overview';
import Treasury from './components/treasury/Treasury';
import Proposals from './components/proposals/Proposals';

function page() {
  const [activeBtn, setActiveBtn] = useState("Treasury")

  const renderActivePage = () => {
    switch (activeBtn) {
      case "Overview":
        return <Overview />;
      case "Proposals":
        return <Proposals />;
      case "Treasury":
        return <Treasury />;
      default:
        return null;
    }
  };

  return (
    <div className='governance_main'>
      <PageHeader title="Governance (DAO)" showSearch={false} buttonText="Create New Proposal" buttonIcon={false} />
      <div className='governance_filter_btn glass_card'>
        <div className='governance_button_group'>
          <button className={`governance_btn ${activeBtn === "Overview" ? "governanceActive" : ""}`}
            onClick={() => setActiveBtn("Overview")}>Overview</button>
          <button className={`governance_btn ${activeBtn === "Proposals" ? "governanceActive" : ""}`}
            onClick={() => setActiveBtn("Proposals")}>Proposals</button>
          <button className={`governance_btn ${activeBtn === "Treasury" ? "governanceActive" : ""}`}
            onClick={() => setActiveBtn("Treasury")}>Treasury</button>
        </div>
      </div>
      <div className='governance_different_page'>
        {renderActivePage()}
      </div>

    </div>
  )
}

export default page