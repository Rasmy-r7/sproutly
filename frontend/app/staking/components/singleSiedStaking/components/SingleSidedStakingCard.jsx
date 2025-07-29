import React from 'react'

function SingleSidedStakingCard() {
    return (
        <div className="SingleSidedStaking_cards">
            <div className="SingleSidedStaking_card glass_card">
                <p className="SingleSidedStaking_label">Your Staked $SEED</p>
                <p className="SingleSidedStaking_value">
                    <span className="SingleSidedStaking_highlight">15,000</span> <span className="tierstaking__unit">$SEED</span>
                </p>
            </div>

            <div className="SingleSidedStaking_card glass_card">
                <p className="SingleSidedStaking_label">Unclaimed Rewards</p>
                <p className="SingleSidedStaking_value">
                    125 <span className="SingleSidedStaking_unit">$SEED</span>
                </p>
            </div>

            <div className="SingleSidedStaking_card glass_card">
                <p className="SingleSidedStaking_label">Total Rewards Claimed (Lifetime)</p>
                <p className="SingleSidedStaking_value">
                    875 <span className="SingleSidedStaking_unit">$SEED</span>
                </p>
            </div>
        </div>
    )
}

export default SingleSidedStakingCard