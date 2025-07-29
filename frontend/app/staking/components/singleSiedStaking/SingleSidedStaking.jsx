'use client';


import React from 'react'
import "./SingleSidedStaking.css"
import SaplingPool from './components/SaplingPool'
import SingleSidedStakingCard from './components/SingleSidedStakingCard';

function SingleSidedStaking() {
  return (
    <div className='SingleSidedStaking'>
      <SingleSidedStakingCard/>
      <SaplingPool />
    </div>
  )
}

export default SingleSidedStaking