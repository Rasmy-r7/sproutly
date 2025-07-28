import React from 'react';
import "./Treasury.css";
import TreasuryCard from './components/TreasuryCard';
import TreasuryAssets from './components/TreasuryAssets';
import TreasuryTable from './components/TreasuryTable';




function Treasury() {
  return (
    <div className='treasury'>
      <p className='treasury_heading'>Current Holdings</p>

      <TreasuryCard />
      <TreasuryAssets />
      <TreasuryTable />

    </div>
  );
}

export default Treasury;
