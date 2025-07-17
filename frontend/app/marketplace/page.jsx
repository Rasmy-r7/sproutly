'use client';


import PageHeader from '@/components/pageHeader/PageHeader'
import React, { useState } from 'react'
import './marketplace.css'
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import Image from 'next/image';
import { IoMdSearch } from "react-icons/io";
import { FaCheck } from "react-icons/fa";


const featuredNFTs = [
  {
    id: 1,
    bg: "/images/featured_trending4.png",
    img: "/images/nftinventory1.png",
    name: "Redwood NFTree #001",
    bid: "2500",
    token: "$SEED",
    time: "1h 45m"
  },
  {
    id: 2,
    bg: "/images/featured_trending3.png",
    img: "/images/nftinventory2.png",
    name: "Redwood NFTree #001",
    bid: "2500",
    token: "$SEED",
    time: "1h 45m"
  },
  {
    id: 3,
    bg: "/images/featured_trending2.png",
    img: "/images/nftinventory3.png",
    name: "Redwood NFTree #001",
    bid: "2500",
    token: "$SEED",
    time: "1h 45m"
  },
  {
    id: 4,
    bg: "/images/featured_trending1.png",
    img: "/images/nftinventory1.png",
    name: "Redwood NFTree #001",
    bid: "2500",
    token: "$SEED",
    time: "1h 45m"
  },
  {
    id: 5,
    bg: "/images/featured_trending4.png",
    img: "/images/nftinventory1.png",
    name: "Redwood NFTree #001",
    bid: "2500",
    token: "$SEED",
    time: "1h 45m"
  },
  {
    id: 6,
    bg: "/images/featured_trending3.png",
    img: "/images/nftinventory2.png",
    name: "Redwood NFTree #001",
    bid: "2500",
    token: "$SEED",
    time: "1h 45m"
  },
  {
    id: 7,
    bg: "/images/featured_trending2.png",
    img: "/images/nftinventory3.png",
    name: "Redwood NFTree #001",
    bid: "2500",
    token: "$SEED",
    time: "1h 45m"
  },
  {
    id: 8,
    bg: "/images/featured_trending1.png",
    img: "/images/nftinventory1.png",
    name: "Redwood NFTree #001",
    bid: "2500",
    token: "$SEED",
    time: "1h 45m"
  },
  {
    id: 9,
    bg: "/images/featured_trending3.png",
    img: "/images/nftinventory2.png",
    name: "Redwood NFTree #001",
    bid: "2500",
    token: "$SEED",
    time: "1h 45m"
  }

];

const marketplacefilter = [
  {
    title: "Asset Type",
    items: ["NFTree", "Sapling", "Plot", "$aCO2 Bundle", "w$aCO2"]
  },
  {
    title: "Sale Status",
    items: ["NFTree", "Sapling", "Plot", "$aCO2 Bundle", "w$aCO2"]
  },
  {
    title: "Staking Status",
    items: ["NFTree", "Sapling", "Plot", "$aCO2 Bundle", "w$aCO2"]
  },
  {
    title: "Price Range",
    items: ["NFTree", "Sapling", "Plot", "$aCO2 Bundle", "w$aCO2"]
  },
  {
    title: "Rarity / Tier",
    items: ["Common", "Rare", "Epic", "Legendary"]
  },

];



function page() {

  const [openIndexes, setOpenIndexes] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});


  const toggleSection = (index) => {
    if (openIndexes.includes(index)) {
      // If already open, remove it
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Otherwise, add it
      setOpenIndexes([...openIndexes, index]);
    }
  };
  const handleSelectItem = (sectionIdx, item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [sectionIdx]: prev[sectionIdx] === item ? null : item,
    }));
  };


  return (
    <div className='marketplace_main'>

      <PageHeader
        title="Marketplace"
        buttonText="List Your NFT"
        buttonIcon={<FiPlus />}
        showSearch={true}
      />
      <div className='marketplace'>
        <div className='featured_trending'>
          <p>Featured & Trending</p>
          <div className='featured_trending_icon'>
            <div className='icon_wrapper'><IoIosArrowBack /></div>
            <div className='icon_wrapper'><IoIosArrowForward /></div>
          </div>
        </div>


        {/* featured_trending_cart */}
        <div className="featured_trending_cart">
          {featuredNFTs.slice(0, 4).map((nft) => (
            <div
              key={nft.id}
              className="featured_trending_cartinfo"
              style={{
                backgroundImage: `url('${nft.bg}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="ft_cartinfo_head">
                <Image
                  src={nft.img}
                  alt="nftinventory"
                  width={32}
                  height={32}
                  className="nftinventory_img"
                />
              </div>
              <div className="ft_cartinfo_bottom">
                <div>
                  <p className="ft_redwood">{nft.name}</p>
                </div>
                <div>
                  <p className="ft_current">Current Bid</p>
                  <p className="ft_value">{nft.bid}</p>
                  <p className="ft_speed">{nft.token}</p>
                </div>
                <div className="ftendtime_btn">
                  <button className="endtime_btn">
                    <span className="endtime_btn_span">Ends in:</span>
                    {nft.time}
                  </button>
                  <button className="place_btn">Place Bid</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* filter featured_trending_cart  */}
      <div className='filter_featured_trending_cart'>
        <div className='filter_featured_trending_cart_main'>
          <div className='sortby_filter'>
            <div className='sortby_head'>
              <label htmlFor="" className='label'>Sort by :</label>
              <select
                id="treeType"
                className='slectoption'
              >
                <option value="alphabetical">Alphabetical</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
            <div className='featured_trending_icon'>
              <div className='icon_wrapper'><IoIosArrowBack /></div>
              <div className='icon_wrapper'><IoIosArrowForward /></div>
            </div>
          </div>

          <div className='featured_trending_cart_filter'>

            {featuredNFTs.map((nft) => (
              <div
                key={nft.id}
                className="featured_trending_cartinfo_filter"
                style={{
                  backgroundImage: `url('${nft.bg}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="ft_cartinfo_head">
                  <Image
                    src={nft.img}
                    alt="nftinventory"
                    width={32}
                    height={32}
                    className="nftinventory_img"
                  />
                </div>
                <div className="ft_cartinfo_bottom_filter">
                  <div>
                    <p className="ft_redwood">{nft.name}</p>
                  </div>
                  <div>
                    <p className="ft_current">Current Bid</p>
                    <p className="ft_value">{nft.bid}</p>
                    <p className="ft_speed">{nft.token}</p>
                  </div>
                  <div className="ftendtime_btn_filter">
                    <button className="endtime_btn_filter">
                      <span className="endtime_btn_span_filter">Ends in:</span>
                      {nft.time}
                    </button>
                    <button className="place_btn_filter">Place Bid</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='marketfilter'>
          <div className='filter_rest'>
            <p className='numfilter'>Filters (2)</p>
            <p className='numreset'>reset</p>
          </div>
          <div className="market_search">
            <input type="text" className="market_search_input" placeholder="Key Words" />
            <IoMdSearch className="market_search_icon" />
          </div>

          <div className="marketplace_filter">
            {marketplacefilter.map((section, idx) => (
              <div className="marketplace_filter_main" key={idx}>
                <div className="marketplace_filter_header" onClick={() => toggleSection(idx)}>
                  <h4>{section.title}</h4>
                  <MdOutlineKeyboardArrowDown className='marketplace_arrowicon'
                    style={{
                      transform: openIndexes.includes(idx) ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.5s'
                    }}
                  />
                </div>
                {openIndexes.includes(idx) && (
                  <ul>
                    {section.items.map((item, index) => {
                      const isSelected = selectedItems[idx] === item;
                      return (
                        <li
                          key={index}
                          className={`marketplace_filter_item ${isSelected ? "selected" : ""}`}
                          onClick={() => handleSelectItem(idx, item)}
                        >
                          <span>{item}</span>
                          {isSelected && <FaCheck className="check_icon" />}
                        </li>
                      );
                    })}
                  </ul>

                )}
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default page