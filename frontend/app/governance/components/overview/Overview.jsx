import React from 'react';
import "./Overview.css";
import OverviewCards from './components/OverviewCards';
import GovernanceSection from './components/GovernanceSection';
import OverviewProposal from './components/OverviewProposal';



function Overview() {
  return (
    <div className='overview'>
      <OverviewCards />
      <GovernanceSection />
      <p className=''>Active Voting Proposals</p>
      <OverviewProposal />


    </div>
  )
}

export default Overview;
