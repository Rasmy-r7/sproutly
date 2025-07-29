'use client';

import PageHeader from '@/components/pageHeader/PageHeader'
import React from 'react'
import { FiPlus } from "react-icons/fi";
import MarketplaceFeatured from './components/MarketplaceFeatured';
import MarketFilter from './components/MarketFilter';
import './marketplace.css'


function page() {
  return (
    <div className='marketplace_main'>

      <PageHeader
        title="Marketplace"
        buttonText="List Your NFT"
        buttonIcon={<FiPlus />}
        showSearch={true}
      />

      <MarketplaceFeatured />

      {/* filter featured_trending_cart  */}
      <MarketFilter />

    </div>
  )
}

export default page