
import Image from 'next/image';
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



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


function MarketplaceFeatured() {
    return (
        <div className='marketplace glass_card'>
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
    )
}

export default MarketplaceFeatured