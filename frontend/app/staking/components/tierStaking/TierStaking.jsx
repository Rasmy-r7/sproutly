'use client';

import React, { useState } from 'react';
import './TierStaking.css';
// import "../../../globals.css"

function TierStaking() {
  const [activeBtn, setActiveBtn] = useState("$SEED Rewards")

  return (
    <div className="tierstaking">
      <div className="tierstaking__cards">
        <div className="tierstaking__card glass_card">
          <p className="tierstaking__label">Your Staked $SEED</p>
          <p className="tierstaking__value">
            <span className="tierstaking__highlight">15,000</span> <span className="tierstaking__unit">$SEED</span>
          </p>
        </div>

        <div className="tierstaking__card glass_card">
          <p className="tierstaking__label">Unclaimed Rewards</p>
          <p className="tierstaking__value">
            125 <span className="tierstaking__unit">$SEED</span>
          </p>
        </div>

        <div className="tierstaking__card glass_card">
          <p className="tierstaking__label">Total Rewards Claimed (Lifetime)</p>
          <p className="tierstaking__value">
            875 <span className="tierstaking__unit">$SEED</span>
          </p>
        </div>
      </div>

      <div className="stakeform  glass_card">
        <div className="stakeform__left">
          <p className="stakeform__title">Stake More $SEED</p>

          <div className="stakeform__section">
            <p className="stakeform__label">Stake For</p>
            <div className="stakeform__buttons">
              <button
                className={`stakeform__button ${activeBtn === "$SEED Rewards" ? "stakeform__button_active" : ""}`}
                onClick={() => setActiveBtn("$SEED Rewards")}
              >
                $SEED Rewards
              </button>
              <button
                className={`stakeform__button ${activeBtn === "Sapling Rewards" ? "stakeform__button_active" : ""}`}
                onClick={() => setActiveBtn("Sapling Rewards")}
              >
                Sapling Rewards
              </button>
            </div>
          </div>

          <p className="stakeform__label">Amount to Stake</p>
          <div className="stakeform__input_group">
            <input type="text" className="stakeform__input" placeholder='Text input' />
            <p className="stakeform__unit">$SEED</p>
          </div>

          <button className="stakeform__stake_button">Stake $SEED</button>
        </div>

        <div className="stakeform__right">
          <p className="stakeform__rightlabel">Your Available $SEED</p>
          <p className="stakeform__available">
            5000 <span className="stakeform__unit">$SEED</span>
          </p>
        </div>
      </div>

      <div className="sapling_pool">
        <div className="sapling_pool__cards"
          style={{
            backgroundImage: `url("/images/tierstaking1.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}>
          <div className='sapling_pool__card glass_card'>
            <p className="sapling_pool__title">Saplings Rewards Pool</p>
            <div className="sapling_pool__info">
              <div className="sapling_pool__info_item">
                <p className="sapling_pool__label">Current <br /> Est. APY</p>
                <p className="sapling_pool__value">15%</p>
              </div>
              <div className="sapling_pool__info_item">
                <p className="sapling_pool__label">Your Staked Amount ($SEED)</p>
                <p className="sapling_pool__value">5000</p>
              </div>
              <div className="sapling_pool__info_item">
                <p className="sapling_pool__label">Unclaimed Rewards:</p>
                <p className="sapling_pool__value">2</p>
              </div>
            </div>

            <div className="sapling_pool__progress">
              <div className="sapling_pool__progress_text">
                <p className="sapling_pool__label">+1 Sapling</p>
                <p className="sapling_pool__label">66%</p>
              </div>
              <div className="sapling_pool__progress_bar">
                <div className="sapling_pool__progress_fill" style={{ width: "66%" }}></div>
              </div>
            </div>

            <div className="sapling_pool__actions">
              <button className="sapling_pool__button">Claim Saplings</button>
              <button className="sapling_pool__button_secondary">Unstake</button>
            </div>

          </div>

        </div>
        <div className="sapling_pool__cards"
          style={{
            backgroundImage: `url("/images/tierstaking2.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}>
          <div className='sapling_pool__card glass_card'>
            <p className="sapling_pool__title">Saplings Rewards Pool</p>
            <div className="sapling_pool__info">
              <div className="sapling_pool__info_item">
                <p className="sapling_pool__label">Current <br /> Est. APY</p>
                <p className="sapling_pool__value">15%</p>
              </div>
              <div className="sapling_pool__info_item">
                <p className="sapling_pool__label">Your Staked Amount ($SEED)</p>
                <p className="sapling_pool__value">5000</p>
              </div>
              <div className="sapling_pool__info_item">
                <p className="sapling_pool__label">Unclaimed Rewards:</p>
                <p className="sapling_pool__value">2</p>
              </div>
            </div>

            <div className="sapling_pool__progress">
              <div className="sapling_pool__progress_text">
                <p className="sapling_pool__label">+1 Sapling</p>
                <p className="sapling_pool__label">66%</p>
              </div>
              <div className="sapling_pool__progress_bar">
                <div className="sapling_pool__progress_fill" style={{ width: "66%" }}></div>
              </div>
            </div>

            <div className="sapling_pool__actions">
              <button className="sapling_pool__button">Claim Saplings</button>
              <button className="sapling_pool__button_secondary">Unstake</button>
            </div>

          </div>
        </div>


      </div>




    </div>
  );
}

export default TierStaking;
