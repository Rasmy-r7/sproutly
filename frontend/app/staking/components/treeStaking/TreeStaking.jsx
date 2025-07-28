import Image from 'next/image'
import React from 'react'
import { PiArrowFatLineUpBold } from "react-icons/pi"
import './TreeStaking.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { IoMdUnlock } from "react-icons/io";




const treeStakingCard = [
    {
        id: 1,
        bg: "/images/cartbg2.png",
        img: "/images/nftinventory3.png",
        level: "Level 2",
        showLevelIcon: true,
        levelColor: "var(--white-80)",
        levelTextColor: "var(--white-100)",
        progress: "75%",
        progressColor: "var(--GreenSecondary-100)",
        name: "Oak NFTree #1234",
        yield: "CO2 yield of 1.2 Tonnes",
        stakeText: "Not Staked",
    }
]
const stakedNFTrees = [
    {
        id: 1,
        name: "Oak #1234",
        seedLocked: "1,000",
        status: "Active",
        dailyReward: "0.04",
        icons: ["/images/nftinventory3.png", "/images/featured_trending3.png"],
    },
    {
        id: 2,
        name: "Oak #4567",
        seedLocked: "1,000",
        status: "Active",
        dailyReward: "0.04",
        icons: ["/images/nftinventory3.png", "/images/featured_trending3.png"],
    },
    {
        id: 3,
        name: "Oak #7890",
        seedLocked: "1,000",
        status: "Active",
        dailyReward: "0.04",
        icons: ["/images/nftinventory3.png", "/images/featured_trending3.png"],
    },
    {
        id: 4,
        name: "Oak #9999",
        seedLocked: "1,000",
        status: "Active",
        dailyReward: "0.04",
        icons: ["/images/nftinventory3.png", "/images/featured_trending3.png"],
    },
    {
        id: 5,
        name: "Oak #9999",
        seedLocked: "1,000",
        status: "Active",
        dailyReward: "0.04",
        icons: ["/images/nftinventory3.png", "/images/featured_trending3.png"],
    },
    {
        id: 6,
        name: "Oak #9999",
        seedLocked: "1,000",
        status: "Active",
        dailyReward: "0.04",
        icons: ["/images/nftinventory3.png", "/images/featured_trending3.png"],
    },
    {
        id: 7,
        name: "Oak #9999",
        seedLocked: "1,000",
        status: "Active",
        dailyReward: "0.04",
        icons: ["/images/nftinventory3.png", "/images/featured_trending3.png"],
    },
    {
        id: 8,
        name: "Oak #9999",
        seedLocked: "1,000",
        status: "Active",
        dailyReward: "0.04",
        icons: ["/images/nftinventory3.png", "/images/featured_trending3.png"],
    },
];



function TreeStaking() {
    return (
        <div className='tree_wrapper'>
            
            <div className='glass_card tree_card'>
                <p className='tree_heading'>Stake More Trees</p>
                <div className='tree_card_container'>

                    {treeStakingCard.map((item) => (
                        <div
                            key={item.id}
                            className='tree_card_item'
                            style={{
                                backgroundImage: `url('${item.bg}')`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }}
                        >
                            <div className='tree_card_top'>
                                <Image
                                    src={item.img}
                                    alt="staking_img"
                                    width={32}
                                    height={32}
                                    className="tree_card_image"
                                />
                                <div className='tree_level_section'>
                                    <div className='tree_level_icon' style={{ color: item.levelColor }}>
                                        {item.showLevelIcon && <PiArrowFatLineUpBold />}
                                    </div>
                                    <div className='tree_level_info'>
                                        <p style={{ color: item.levelTextColor }}>{item.level}</p>
                                        <div className="tree_progress_bar">
                                            <div
                                                className="tree_progress_fill"
                                                style={{ width: item.progress, backgroundColor: item.progressColor }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tree_card_bottom'>
                                <p className='tree_name'>{item.name}</p>
                                <p className='tree_yield'>{item.yield}</p>
                            </div>
                        </div>
                    ))}

                    <div className='tree_stake_controls'>
                        <div className='tree_dropdown_section'>
                            <p className='select_nft'>Select NFTree</p>
                            <select className='tree_select'>
                                <option>Oak NFTree #1234</option>
                                <option>Oak NFTree #5678</option>
                            </select>
                        </div>
                        <div className='tree_balance_section'>
                            <p>Your Available $SEED</p>
                            <p>5500</p>
                        </div>
                        <div className='tree_input_section'>
                            <p>Amount of $SEED to Lock</p>
                            <input type="text" placeholder='Text input' className='tree_input' />
                            <button className='tree_button'>Stake Selected Tree</button>
                        </div>
                    </div>

                    <div className='tree_rewards'>
                        <p>Stake Selected Tree</p>
                        <div className='tree_reward_buttons'>
                            <button className='tree_reward_item'>
                                250,000 $SEED
                                <div className='tree_claim'>Claim</div>
                            </button>
                            <button className='tree_reward_item'>
                                2 Saplings
                                <div className='tree_claim'>Claim</div>
                            </button>
                        </div>
                        <button className='allRewards_btn'>
                            Claim All Rewards
                        </button>
                    </div>

                </div>
            </div>
            
            <div className="tree_stats">
                <div className="tree_stat_card glass_card">
                    <p className="tree_stat_title">Current Est. APY</p>
                    <p className="tree_stat_value">
                        12% <span className="tree_stat_unit">$aCO₂</span>
                    </p>
                    <p className="tree_stat_desc">Estimated Annual Percentage Yield in $aCO₂ rewards</p>
                </div>

                <div className="tree_stat_card glass_card">
                    <p className="tree_stat_title">Total $SEED Locked</p>
                    <p className="tree_stat_value">
                        250,000 <span className="tree_stat_unit">$SEED</span>
                    </p>
                    <p className="tree_stat_desc">Across all Tree Staking positions on plots</p>
                </div>

                <div className="tree_stat_card glass_card">
                    <p className="tree_stat_title">Total $aCO₂ Rewards Earned</p>
                    <p className="tree_stat_value">
                        1,560 <span className="tree_stat_unit">$aCO₂</span>
                    </p>
                    <p className="tree_stat_desc">Your lifetime earnings from Tree Staking</p>
                </div>
            </div>

            <div className="glass_card tree_table_wrapper">
                <div className="tree_table_header">
                    <p className="tree_table_title">Your Staked NFTrees</p>
                    <div className="tree_table_nav">
                        <div className="tree_nav_btn"><IoIosArrowBack /></div>
                        <div className="tree_nav_btn"><IoIosArrowForward /></div>
                    </div>
                </div>

                <table className="tree_table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>$SEED Locked</th>
                            <th>Status</th>
                            <th>Est. Daily $aCO₂ Reward</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stakedNFTrees.map((item) => (
                            <tr key={item.id}>
                                <td className="tree_table_name">
                                    {item.icons.map((icon, index) => (
                                        <Image
                                            key={index}
                                            src={icon}
                                            alt=""
                                            width={index === 0 ? 20 : 32}
                                            height={index === 0 ? 20 : 32}
                                            className="tree_table_icon"
                                            style={{ objectFit: "cover" }}
                                        />
                                    ))}
                                    <span className="tree_table_nftname">{item.name}</span>
                                </td>
                                <td>{item.seedLocked}</td>
                                <td>
                                    <button className="tree_status_active">{item.status}</button>
                                </td>
                                <td>{item.dailyReward}</td>
                                <td className="tree_table_actions">
                                    <FaEye className="tree_action_icon" />
                                    <IoMdUnlock className="tree_action_icon" />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default TreeStaking
