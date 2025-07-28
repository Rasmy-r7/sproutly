'use client';

import PageHeader from '@/components/pageHeader/PageHeader'
import React, { useState } from 'react'
import './staking.css'
import TreeStaking from './components/treeStaking/TreeStaking';
import SingleSidedStaking from './components/singleSiedStaking/SingleSidedStaking';
import TierStaking from './components/tierStaking/TierStaking';
import Membership from './components/membership/Membership';

function page() {

  const [activeBtn, setActiveBtn] = useState("Tier Staking")

  const renderActivePage = () => {
    switch (activeBtn) {
      case "Tree Staking":
        return <TreeStaking />;
      case "Single-Sided Staking":
        return <SingleSidedStaking />;
      case "Tier Staking":
        return <TierStaking />;
      case "Membership":
        return <Membership />;
      default:
        return null;
    }
  };

  return (
    <div className='main_staking'>
      <PageHeader title="Staking" showSearch={false} />
      <div className='staking_filter_btn glass_card'>
        <div className='staking_button_group'>
          <button className={`staking_btn ${activeBtn === "Tree Staking" ? "stackingActive" : ""}`}
            onClick={() => setActiveBtn("Tree Staking")}>Tree Staking</button>
          <button className={`staking_btn ${activeBtn === "Single-Sided Staking" ? " stackingActive" : ""}`} onClick={() => setActiveBtn("Single-Sided Staking")}>Single-Sided Staking</button>
          <button className={`staking_btn ${activeBtn === "Tier Staking" ? " stackingActive" : ""}`} onClick={() => setActiveBtn("Tier Staking")}>Tier Staking</button>
          <button className={`staking_btn ${activeBtn === "Membership" ? " stackingActive" : ""}`} onClick={() => setActiveBtn("Membership")}>Membership</button>
        </div>
      </div>
      <div className='different_page'>
        {renderActivePage()}
      </div>


    </div>
  )
}

export default page