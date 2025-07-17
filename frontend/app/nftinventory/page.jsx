import PageHeader from '@/components/pageHeader/PageHeader'
import React from 'react'
import "./nftinventory.css"
import { RiTreeFill } from "react-icons/ri";
import { TbLeaf2 } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { PiArrowFatLineUpBold } from "react-icons/pi";
import { IoCalendarClearSharp } from "react-icons/io5";




const inventoryData = [
  { img: false, label: "Portfolio Value", value: "$38,500", unit: "" },
  { img: "/images/nftinventory3.png", label: "NFTrees", value: 15, unit: "" },
  { img: "/images/nftinventory3.png", label: "Saplings", value: 20, unit: "" },
  { img: "/images/nftinventory3.png", label: "Plots", value: 3, unit: "" },
  { img: false, label: "Total CO2 Offset", value: 45.8, unit: "Tonnes" }
];


const nftData = [
  {
    id: 1,
    bg: "/images/cartbg2.png",
    img: "/images/nftinventory3.png",
    level: "Level 2",
    showLevelIcon: true,
    levelColor: "rgba(255, 255, 255, 0.8)",
    levelTextColor: "rgba(255, 255, 255, 1)",
    progress: "75%",
    progressColor: "rgba(46, 204, 113, 1)",
    name: "Oak NFTree #1234",
    yield: "CO2 yield of 1.2 Tonnes",
    stakeText: "Not Staked",
    stakeColor: "rgba(255, 196, 97, 1)",
    date: "July 01, 2024"
  },
  {
    id: 2,
    bg: "/images/cartbg3.png",
    img: "/images/nftinventory2.png",
    level: "Level 4",
    showLevelIcon: true,
    levelColor: "rgba(173, 241, 81, 1)",
    levelTextColor: "rgba(255, 255, 255, 1)",
    progress: "100%",
    progressColor: "rgba(173, 241, 81, 1)",
    name: "Maple Sapling #5678",
    yield: "CO2 yield of 1.2 Tonnes",
    stakeText: "Not Applicable",
    stakeColor: "rgba(245, 148, 147, 1)",
    date: "July 01, 2024"
  },
  {
    id: 3,
    bg: "/images/cartbg2.png",
    img: "/images/nftinventory3.png",
    level: "Level 2",
    showLevelIcon: true,
    levelColor: "rgba(255, 255, 255, 0.8)",
    levelTextColor: "rgba(255, 255, 255, 1)",
    progress: "75%",
    progressColor: "rgba(46, 204, 113, 1)",
    name: "Oak NFTree #1234",
    yield: "CO2 yield of 1.2 Tonnes",
    stakeText: "Not Staked",
    stakeColor: "rgba(255, 196, 97, 1)",
    date: "July 01, 2024"
  },
  {
    id: 4,
    bg: "/images/cartbg1.png",
    img: "/images/nftinventory1.png",
    level: "Level 8",
    showLevelIcon: false,
    levelColor: "#ffffff",
    levelTextColor: "rgba(173, 241, 81, 1)",
    progress: "100%",
    progressColor: "rgba(173, 241, 81, 1)",
    name: "Amazon Plot #007",
    yield: "CO2 yield of 1.2 Tonnes",
    stakeText: "Active Staking",
    stakeColor: "rgba(125, 223, 167, 1)",
    date: "July 01, 2024"
  },
  {
    id: 5,
    bg: "/images/cartbg2.png",
    img: "/images/nftinventory3.png",
    level: "Level 2",
    showLevelIcon: true,
    levelColor: "rgba(255, 255, 255, 0.8)",
    levelTextColor: "rgba(255, 255, 255, 1)",
    progress: "75%",
    progressColor: "rgba(46, 204, 113, 1)",
    name: "Oak NFTree #1234",
    yield: "CO2 yield of 1.2 Tonnes",
    stakeText: "Not Staked",
    stakeColor: "rgba(255, 196, 97, 1)",
    date: "July 01, 2024"
  },
  {
    id: 6,
    bg: "/images/cartbg1.png",
    img: "/images/nftinventory1.png",
    level: "Level 8",
    showLevelIcon: false,
    levelColor: "#ffffff",
    levelTextColor: "rgba(173, 241, 81, 1)",
    progress: "100%",
    progressColor: "rgba(173, 241, 81, 1)",
    name: "Amazon Plot #007",
    yield: "CO2 yield of 1.2 Tonnes",
    stakeText: "Active Staking",
    stakeColor: "rgba(125, 223, 167, 1)",
    date: "July 01, 2024"
  },
  {
    id: 7,
    bg: "/images/cartbg2.png",
    img: "/images/nftinventory3.png",
    level: "Level 2",
    showLevelIcon: true,
    levelColor: "rgba(255, 255, 255, 0.8)",
    levelTextColor: "rgba(255, 255, 255, 1)",
    progress: "75%",
    progressColor: "rgba(46, 204, 113, 1)",
    name: "Oak NFTree #1234",
    yield: "CO2 yield of 1.2 Tonnes",
    stakeText: "Not Staked",
    stakeColor: "rgba(255, 196, 97, 1)",
    date: "July 01, 2024"
  },
  {
    id: 8,
    bg: "/images/cartbg3.png",
    img: "/images/nftinventory2.png",
    level: "Level 4",
    showLevelIcon: true,
    levelColor: "rgba(173, 241, 81, 1)",
    levelTextColor: "rgba(255, 255, 255, 1)",
    progress: "100%",
    progressColor: "rgba(173, 241, 81, 1)",
    name: "Maple Sapling #5678",
    yield: "CO2 yield of 1.2 Tonnes",
    stakeText: "Not Applicable",
    stakeColor: "rgba(245, 148, 147, 1)",
    date: "July 01, 2024"
  }
];


function Page() {
  return (
    <div className='main_nftinventory_cart'>
      <PageHeader title="NFT Inventory" showSearch={false} />
      <div className='nftinventory_cart'>
        {inventoryData.map((item, index) => (
          <div className='inventory_cart' key={index}>
            <p className='icon_label'><span className='inventory_icon'>
              {item.img && <Image
                src={item.img}
                alt="nftinventory"
                width={20}
                height={20}
                className=""
              />}
            </span>{item.label}</p>
            <p className='inventory_number'>
              {item.value} {item.unit && <span className='inventory_unit'>{item.unit}</span>}
            </p>
          </div>
        ))}
      </div>

      <div className='nftinventory_cart_bottom'>

        <div className='nftfilter_search'>
          <div className='nftfilter'>
            <button className='filter_btn'>All</button>
            <button className='filter_btn'>NFTree</button>
            <button className='filter_btn'>Sapling</button>
            <button className='filter_btn'>Plot</button>
          </div>
          <div className="nftsearch">
            <input type="text" placeholder='Search Box' />
            <CiSearch className='search_icon' />

          </div>

        </div>

        {/* cart */}
        <div className='nftinventory_cartinfo'>
          {nftData.map((item, index) => (
            <div
              key={item.id}
              className='cartinfo'
              style={{
                backgroundImage: `url('${item.bg}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <div className='cartinfo_head'>
                <Image
                  src={item.img}
                  alt="nftinventory"
                  width={32}
                  height={32}
                  className="nftinventory_img"
                />
                <div className='levelinfo'>
                  <div className='up_icon' style={{ color: item.levelColor }}>
                    {item.showLevelIcon && <PiArrowFatLineUpBold />}
                  </div>
                  <div className='level'>
                    <p style={{ color: item.levelTextColor }}>{item.level}</p>
                    <div className="progress_bar_nft">
                      <div
                        className="progress_fill"
                        style={{ width: item.progress, backgroundColor: item.progressColor }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cartinfo_bottom'>
                <p className='paaa'>{item.name}</p>
                <p className='pbbb'>{item.yield}</p>
                <div className='bottom_btn'>
                  <button
                    style={{
                      border: `1px solid ${item.stakeColor}`,
                      color: item.stakeColor
                    }}
                    className='stake_btn'
                  >
                    {item.stakeText}
                  </button>
                  <button className='date_btn'>
                    <IoCalendarClearSharp />
                    {item.date}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>


    </div>
  )
}

export default Page
