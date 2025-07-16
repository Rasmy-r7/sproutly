import PageHeader from '@/components/pageHeader/PageHeader'
import React from 'react'
import "./nftinventory.css"
import { RiTreeFill } from "react-icons/ri";
import { TbLeaf2 } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";


const inventoryData = [
  { icon: null, label: "Portfolio Value", value: "$38,500", unit: "" },
  { icon: <RiTreeFill />, label: "NFTrees", value: 15, unit: "" },
  { icon: <TbLeaf2 />, label: "Saplings", value: 20, unit: "" },
  { icon: <RiTreeFill />, label: "Plots", value: 3, unit: "" },
  { icon: null, label: "Total CO2 Offset", value: 45.8, unit: "Tonnes" }
];

function Page() {
  return (
    <div className='main_nftinventory_cart'>
      <PageHeader title="NFT Inventory" />
      <div className='nftinventory_cart'>
        {inventoryData.map((item, index) => (
          <div className='inventory_cart' key={index}>
            <p className='icon_label'><span className='inventory_icon'>{item.icon}</span>{item.label}</p>
            <p className='inventory_number'>
              {item.value} {item.unit && <span className='inventory_unit'>{item.unit}</span>}
            </p>
          </div>
        ))}
      </div>

      <div className='nftinventory_cart_bottom'>

        <div className='filter_search'>
          <div className='filter'>
            <button className='filter_btn'>All</button>
            <button className='filter_btn'>NFTree</button>
            <button className='filter_btn'>Sapling</button>
            <button className='filter_btn'>Plot</button>
          </div>
          <div className="search">
            <input type="text" placeholder='Search Box' />
            <CiSearch className='search_icon'/>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Page
