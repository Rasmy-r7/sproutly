'use client';


import React, { useState } from 'react'
import { FaLeaf } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import "./Membership.css"
import "../../../globals.css"

const tiers = [
  { name: "Sapling Tier", amount: 5000, icon: "/images/currentTier2.png" },
  { name: "Oak Tier", amount: 10000, icon: "/images/currentTier1.png" },
  { name: "Redwood Tier", amount: 15000, icon: "/images/currentTier3.png" },
  { name: "Ancient Tier", amount: 25000, icon: "/images/currentTier1.png" },
];


function Membership() {

  const [currentAmount, setCurrentAmount] = useState(0); // initially 0 or default

  const handleTierClick = (amount) => {
    setCurrentAmount(amount);
  };

  const getProgressWidth = () => {
    const max = tiers[tiers.length - 1].amount;
    return Math.min((currentAmount / max) * 100, 100);
  };
  return (
    <div className='membership_main'>
      <div className="current_tier glass_card">
        <p className="current_tier_heading">Current Tier</p>

        <div className="current_tier_card_container">
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

          <div className="current_tier_stake_section">
            <div className="current_tier_available">
              <p className="current_tier_available_label">Your Available $SEED</p>
              <p className="current_tier_available_amount">5500</p>
            </div>
            <div className="current_tier_stake_input">
              <p className="current_tier_stake_label">Amount of $SEED to Lock</p>
              <input type="text" placeholder='Text input' className="current_tier_input" />
              <button className="current_tier_button">Increase Stake</button>
            </div>
          </div>
        </div>
      </div>



      <div className="tier-wrapper glass_card">
        <div className="current_value">
          {currentAmount.toLocaleString()} $SEED
        </div>
        <div className="progress-bar">
          <div className="progress-line">
            <div
              className="progress-fill"
              style={{ width: `${getProgressWidth()}%` }}
            />
          </div>

          {tiers.map((tier, index) => {
            const isReached = currentAmount >= tier.amount;

            return (
              <div
                className="tier-step"
                key={index}
                onClick={() => handleTierClick(tier.amount)}
              >
                <div className={`tier-circle ${isReached ? 'reached' : ''}`}>
                  {isReached && <span className="checkmark"><FaCheck/></span>}
                </div>
                <div className={`tier-info ${isReached ? 'reached' : ''}`}>
                  <img src={tier.icon} alt={tier.name} className="tier-icon" />
                  <div>
                    <p className="tier-name">{tier.name}</p>
                    <p className="tier-amount">{tier.amount.toLocaleString()} $SEED</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  )
}

export default Membership