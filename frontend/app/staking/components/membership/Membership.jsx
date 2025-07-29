import React from 'react'
import "./Membership.css"
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";



function Membership() {
  return (
    <div className='membership'>
      {/* Core Member Card */}
      <div className='glass_card membership_card renew'>
        <div className='membership_card_header'>
          <p className='membership_type'>Core Member</p>
          <button className='membership_status_btn'>Active</button>
        </div>
        <div className='membership_amount'>
          <p className='membership_stake'>5,000 <span className='membership_token'>$SEED</span></p>
          <p className='membership_duration'>Staked for 1 Year</p>
        </div>
        <p className='membership_benefits_title'>Benefits</p>
        <div className='membership_benefits'>
          <div className='benefit_item'>
            <IoIosCheckmarkCircle className="benefit_icon check" />
            <p className='benefit_text check'>Access to Private Alpha Discord Channels</p>
          </div>
          <div className='benefit_item'>
            <IoIosCheckmarkCircle className="benefit_icon check" />
            <p className='benefit_text check'>Basic Governance Vote</p>
          </div>
          <div className='benefit_item'>
            <RxCrossCircled className="benefit_icon cross" />
            <p className='benefit_text cross'>No Exclusive Monthly Sapling Airdrops</p>
          </div>
          <div className='benefit_item'>
            <RxCrossCircled className="benefit_icon cross" />
            <p className='benefit_text cross'>No Direct Founder AMAs</p>
          </div>
        </div>
        <button className='membership_action_btn renew'>Renew Membership</button>
      </div>

      {/* Legacy Member Card */}
      <div className='glass_card membership_card'>
        <div className='membership_card_header'>
          <p className='membership_type'>Legacy Member</p>
        </div>
        <div className='membership_amount'>
          <p className='membership_stake'>10,000 <span className='membership_token'>$SEED</span></p>
          <p className='membership_duration'>Staked for Lifetime</p>
        </div>
        <p className='membership_benefits_title'>Benefits</p>
        <div className='membership_benefits'>
          <div className='benefit_item'>
            <IoIosCheckmarkCircle className="benefit_icon check" />
            <p>Access to Private Alpha Discord Channels</p>
          </div>
          <div className='benefit_item'>
            <IoIosCheckmarkCircle className="benefit_icon check" />
            <p>Basic Governance Vote</p>
          </div>
          <div className='benefit_item'>
            <IoIosCheckmarkCircle className="benefit_icon check" />
            <p>No Exclusive Monthly Sapling Airdrops</p>
          </div>
          <div className='benefit_item'>
            <IoIosCheckmarkCircle className="benefit_icon check" />
            <p>No Direct Founder AMAs</p>
          </div>
        </div>
        <button className='membership_action_btn Upgrade'>Upgrade Membership</button>
      </div>
    </div>

  )
}

export default Membership