import React from 'react'

function OverviewCards() {
    return (
        <div className="overview_cards">
            <div className="overview_card glass_card">
                <p className="overview_title">Total $aCO₂ Burned for Votes</p>
                <p className="overview_value">
                    8,750 <span className="overview_unit">Tonnes</span>
                </p>
                <p className="overview_description">Total CO₂ offset by community votes</p>
            </div>

            <div className="overview_card glass_card">
                <p className="overview_title">Active Proposals</p>
                <p className="overview_value">
                    5
                </p>
                <p className="overview_description">Currently open for voting</p>
            </div>

            <div className="overview_card glass_card">
                <p className="overview_title">DAO Treasury</p>
                <p className="overview_value">
                    1,250,000 <span className="overview_unit">$</span>
                </p>
                <p className="overview_description">Funds managed by the community</p>
            </div>
        </div>
    )
}

export default OverviewCards