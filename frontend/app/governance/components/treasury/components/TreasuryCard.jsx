import React from 'react'

function TreasuryCard() {
    return (
        <div className="treasury_cards_container">
            <div className="glass_card treasury_card">
                <p className="treasury_label">$SEED</p>
                <p className="treasury_value">3,500,000</p>
            </div>

            <div className="glass_card treasury_card">
                <p className="treasury_label">$aCO₂</p>
                <p className="treasury_value">
                    150,000 <span className='treasury_unit'>Tonnes</span>
                </p>
            </div>

            <div className="glass_card treasury_card">
                <p className="treasury_label">Stablecoins</p>
                <p className="treasury_value">
                    500,000 <span className="treasury_unit">$</span>
                </p>
            </div>
        </div>)
}

export default TreasuryCard