'use client';

import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';


const tiers = [
    { name: "Sapling Tier", amount: 5000, icon: "/images/currentTier2.png" },
    { name: "Oak Tier", amount: 10000, icon: "/images/currentTier1.png" },
    { name: "Redwood Tier", amount: 15000, icon: "/images/currentTier3.png" },
    { name: "Ancient Tier", amount: 25000, icon: "/images/currentTier1.png" },
];


function TierProgress() {

    const [currentAmount, setCurrentAmount] = useState(0); // initially 0 or default

    const handleTierClick = (amount) => {
        setCurrentAmount(amount);
    };

    const getProgressWidth = () => {
        const max = tiers[tiers.length - 1].amount;
        return Math.min((currentAmount / max) * 100, 100);
    };
    return (
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
                                {isReached && <span className="checkmark"><FaCheck /></span>}
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
    )
}

export default TierProgress