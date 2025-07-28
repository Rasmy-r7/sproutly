import React from 'react'

function GovernanceSection() {
    return (
        <div className="governance_section">

            <div className="governance_privileges_wrapper glass_card">
                <div className="governance_privileges_card">
                    <p className="governance_title">Your Governance Privileges</p>
                    <div className="vote_weight_box">
                        <p className="vote_weight_label">Vote Weight</p>
                        <p className="vote_weight_value">1.5x</p>
                    </div>
                    <p className="vote_description">Your votes carry a 1.5x weight in DAO proposals.</p>
                    <button className="learn_more_button">Learn More about Tier Staking</button>
                </div>

                {/* Tier Info Card */}
                <div
                    className="current_tier_card"
                    style={{
                        backgroundImage: `url("/images/currentTier1.png")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="current_tier_content">
                        <p className="tier_name">Oak Tier</p>
                        <p className="tier_amount">20,000 $SEED</p>
                    </div>
                </div>
            </div>

            {/* Proposal Section */}
            <div className="proposal_submission_card glass_card">
                <p className="proposal_title">Submit a New Proposal</p>
                <p className="proposal_description">
                    Have an idea to improve Sproutly? Submit a proposal for community consideration.
                    Co-sponsorship requirements apply based on your Tier Staking level.
                </p>
                <div className="proposal_buttons">
                    <button className="create_proposal_button">Create New Proposal</button>
                    <button className="view_guidelines_button">View Proposal Guidelines & Template</button>
                </div>
            </div>

        </div>)
}

export default GovernanceSection