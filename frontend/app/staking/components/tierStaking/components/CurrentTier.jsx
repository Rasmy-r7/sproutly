import React from 'react'
import { FaLeaf } from "react-icons/fa";

function CurrentTier() {
    return (
        <div className="current_tier">
            {/* current_tier_card_container */}
            <div className="current_tier_card_container glass_card">
                <p className='tier_staking_p'>Tier Staking</p>
                <div className="current_tier_available">
                    <p className="current_tier_available_label">Your Available $SEED</p>
                    <p className="current_tier_available_amount">5500 <span className='current_tier_available_amount_span'>$SEED</span></p>
                </div>
                <div className="current_tier_stake_input">
                    <p className="current_tier_stake_label">Amount of $SEED to Lock</p>
                    <input type="text" placeholder='Text input' className="current_tier_input" />
                </div>
                <button className="current_tier_button">Increase Stake</button>
            </div>

            {/* current_tier_stake_section */}
            <div className='current_tier_stake_section glass_card'>
                <p className="current_tier_heading">Current Tier</p>
                <div className='current_tier_container'>
                    <div
                        className="current_tier_card"
                        style={{
                            backgroundImage: `url("/images/currentTier1.png")`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="current_tier_card_content">
                            <p className="current_tier_tier_name">Oak Tier</p>
                            <p className="current_tier_tier_amount">20,000 $SEED</p>
                        </div>
                    </div>

                    <div className="current_tier_benefits">
                        <p className="current_tier_benefits_heading">Benefits</p>
                        <div className="current_tier_benefits_list">
                            <div className="current_tier_benefit_item">
                                <FaLeaf className="current_tier_benefit_icon" />
                                <div>
                                    <p className="current_tier_benefit_title">Basic Governance Vote</p>
                                    <p className="current_tier_benefit_desc">Cast votes on core Sproutly DAO proposals.</p>
                                </div>
                            </div>
                            <div className="current_tier_benefit_item">
                                <FaLeaf className="current_tier_benefit_icon" />
                                <div>
                                    <p className="current_tier_benefit_title">5% $aCO₂ Reward Bonus</p>
                                    <p className="current_tier_benefit_desc">Receive a small bonus on your Tree Staking $aCO₂ rewards.</p>
                                </div>
                            </div>
                            <div className="current_tier_benefit_item">
                                <FaLeaf className="current_tier_benefit_icon" />
                                <div>
                                    <p className="current_tier_benefit_title">Community Forum Access</p>
                                    <p className="current_tier_benefit_desc">Gain entry to the general Sproutly community forums and discussions.</p>
                                </div>
                            </div>
                            <div className="current_tier_benefit_item">
                                <FaLeaf className="current_tier_benefit_icon" />
                                <div>
                                    <p className="current_tier_benefit_title">Early News Alerts</p>
                                    <p className="current_tier_benefit_desc">Get notified about major platform updates and news slightly before public announcements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default CurrentTier