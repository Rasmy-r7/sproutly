'use client';


import React from 'react'
import './TierStaking.css';
import CurrentTier from './components/CurrentTier';
import TierProgress from './components/TierProgress';



function TierStaking() {
  return (
    <div className="tierstaking_main">
      <CurrentTier />
      <TierProgress />

    </div>
  );
}

export default TierStaking;
