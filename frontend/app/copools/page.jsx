'use client';


import PageHeader from '@/components/pageHeader/PageHeader'
import React, { useState } from 'react'
import "./copools.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiSolidFilePdf } from "react-icons/bi";
import { RiNftFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { VscArrowBoth } from "react-icons/vsc";

import Image from 'next/image';

const certificateData = [
  {
    id: '#058',
    co2: '10t',
    date: '2025-07-20',
    name: 'Carbon Offset Verification',
    image: '/images/certification_img.png',
  },
  {
    id: '#059',
    co2: '10t',
    date: '2025-07-20',
    name: 'Carbon Offset Verification',
    image: '/images/certification_img.png',
  },
  {
    id: '#060',
    co2: '10t',
    date: '2025-07-20',
    name: 'Carbon Offset Verification',
    image: '/images/certification_img.png',
  },
  {
    id: '#059',
    co2: '10t',
    date: '2025-07-20',
    name: 'Carbon Offset Verification',
    image: '/images/certification_img.png',
  },
  {
    id: '#060',
    co2: '10t',
    date: '2025-07-20',
    name: 'Carbon Offset Verification',
    image: '/images/certification_img.png',
  }, {
    id: '#059',
    co2: '10t',
    date: '2025-07-20',
    name: 'Carbon Offset Verification',
    image: '/images/certification_img.png',
  },
  {
    id: '#060',
    co2: '10t',
    date: '2025-07-20',
    name: 'Carbon Offset Verification',
    image: '/images/certification_img.png',
  }, {
    id: '#059',
    co2: '10t',
    date: '2025-07-20',
    name: 'Carbon Offset Verification',
    image: '/images/certification_img.png',
  },

];


const coManagement = [
  {
    title: "Current $aCO2 Price",
    value: "0.25",
    span1: "$SEED / Tonne",
    icon1: <IoMdArrowDropdown />,
    change1: "-0.15%",
    note: "in 24 hours",
  },

  {
    title: "Total Pool Liquidity",
    value: "50,000",
    span1: "$aCO2",
    icon1: <IoMdArrowDropdown />,
    change1: "-0.15%",
    note: "in 24 hours",
  },
  {
    title: "Daily Volume",
    value: "45,230",
    span1: "$aCO2",
    icon2: <IoMdArrowDropup />,
    change2: "+0.15%",
    note: "in 24 hours",
  }
];


const page = () => {

  const [activeTab, setActiveTab] = useState("buy");

  return (
    <div className='copools_main'>
      <PageHeader title="CO₂ Management" showSearch={false} />
      <div className='certificates'>
        <div className='mint_carbon glass_card'>

          <div className='mint_carbon_header'>
            <p className='mint_carbon_title'>Mint Carbon Offset Certificates</p>
            <p className='mint_carbon_description'>
              Convert your $aCO2 tokens into verifiable PDF and NFT carbon offset
            </p>
          </div>

          <div className='mint_carbon_available'>
            <p className='available_label'>Available $aCO2</p>
            <p className='available_value'>1,500 t</p>
          </div>

          <div className='mint_carbon_burn'>
            <p className='burn_amount'>Amount of $aCO2 to Burn</p>
            <div className='mint_carbon_input'>
              <input type="text" placeholder='Text input' />
              <button>Burn</button>
            </div>
            <p className='burn_info'>You will receive 1 Certificate NFT and a PDF</p>
          </div>
        </div>

        <div className='your_recent glass_card'>
          <div className='recent_certificates'>
            <p className='recent_certificates_title'>Your Recent Certificates</p>
            <div className='recent_certificates_icon'>
              <div className='certificates_icon_wrapper'><IoIosArrowBack /></div>
              <div className='certificates_icon_wrapper'><IoIosArrowForward /></div>
            </div>
          </div>
          <table className="recent_certificate_table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>CO2 Offset</th>
                <th>Minted Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {certificateData.map((certificate, index) => (
                <tr key={index}>
                  <td className="certification_name_cell">
                    <Image
                      src={certificate.image}
                      alt="certification_image"
                      width={24}
                      height={24}
                      className="certification_table_img"
                    />
                    <span className="certification_name_text">{certificate.name}</span>
                  </td>
                  <td>{certificate.id}</td>
                  <td>{certificate.co2}</td>
                  <td>{certificate.date}</td>
                  <td className="certification_actions">
                    <BiSolidFilePdf className="action_icon" />
                    <RiNftFill className="action_icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


        </div>
      </div>



      <div className='carbon_cart_tokens'>
        {/* left */}
        <div className='carbon_calculator glass_card'>
          <div className='calculator_header'>
            <p className='calculator_title'>Carbon Footprint Calculator</p>
            <p className='calculator_subtitle'>
              Estimate your CO₂ emissions from common activities like flights, events, or purchases
            </p>
          </div>

          <div className='calculator_activity'>
            <p className='activity_label'>Activity Type</p>
            <select className='activity_select' name="" id="">
              <option value="flights">Flights</option>
              <option value="flights">Flights</option>
            </select>
          </div>

          <div className='calculator_flight_details'>
            <p className='flight_details_title'>Flight Emissions Details</p>

            <div className='trip_type_options'>
              <div className='trip_option'>
                <input type="radio" name="trip_type" id="round" />
                <p className='trip_option_label'>Round Trip</p>
              </div>
              <div className='trip_option'>
                <input type="radio" name="trip_type" id="oneway" />
                <p className='trip_option_label'>One way</p>
              </div>
            </div>

            <div className='flight_input_group'>
              <p className='flight_input_label'>Fly from</p>
              <select className='flight_input_select' name="" id="">
                <option value="">From</option>
                <option value=""></option>
              </select>
            </div>
            <div className='flight_input_group'>
              <p className='flight_input_label'>Fly to</p>
              <select className='flight_input_select' name="" id="">
                <option value="">To</option>
                <option value=""></option>
              </select>
            </div>

            <button className='calculate_button'>Calculate</button>
          </div>

          <div className='calculator_result glass_card'>
            <p className='result_title'>Estimated Emissions (CO2)</p>
            <div className='result_display'>
              <p className='result_value'>2500</p>
              <p className='result_unit'>Tonnes</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='cart_token_right'>

          {/* right top */}

          <div className="co_management_container">
            {coManagement.map((card, index) => (
              <div className="co_card glass_card" key={index}>

                <p className="co_card_title">{card.title}</p>

                <p className="co_card_value">
                  {card.value}{" "}
                  <span className="co_card_value_span">{card.span1}</span>
                </p>

                <div className="co_card_changes">
                  <div className="co_card_change_wrapper">
                    {card.change1 && (
                      <p className="co_card_change down">
                        {card.icon1 && <span className="co_card_icon">{card.icon1}</span>}
                        {card.change1}
                      </p>
                    )}
                    {card.change2 && (
                      <p className="co_card_change up">
                        {card.icon2 && <span className="co_card_icon">{card.icon2}</span>}
                        {card.change2}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="co_card_note">{card.note}</p>

                  </div>
                </div>

              </div>
            ))}
          </div>
          {/* right down */}
          <div className="trade_container glass_card">

            {/* Header section */}
            <div className="trade_header">
              <div className="trade_text">
                <p className="trade_title">Trade $aCO2 Tokens</p>
                <p className="trade_subtitle">
                  Buy or sell $aCO2 tokens against $SEED. Prices are dynamically adjusted based on current pool liquidity.
                </p>
              </div>
              <div className="trade_buttons">
                <button
                  className={`trade_button ${activeTab === "buy" ? "active" : ""}`}
                  onClick={() => setActiveTab("buy")}
                >
                  Buy
                </button>
                <button
                  className={`trade_button ${activeTab === "sell" ? "active" : ""}`}
                  onClick={() => setActiveTab("sell")}
                >
                  Sell
                </button>
              </div>

            </div>

            {/* Section title */}
            <div className="trade_section_title">
              <p>Buy $aCO2</p>
            </div>


            {/* Trade form */}
            <div className="trade_form">

              {/* Receive section */}
              <div className="trade_input_group">
                <div className="trade_input_label">
                  You will <span className="highlight_text">Receive</span>
                </div>
                <div className="trade_input_box">
                  <input type="text" className="trade_input" placeholder='Text input' />
                  <p className="unit_label">Tonnes</p>
                </div>
              </div>

              {/* Icon switch */}
              <div className="trade_switch_icon">
                <VscArrowBoth />
              </div>

              {/* Pay section */}
              <div className="trade_output">
                <p className="trade_input_label">
                  You will <span className="highlight_text">Pay</span>
                </p>
                <p className="trade_output_value">
                  2500<span className="trade_output_value_span"> $SEED</span>
                </p>
              </div>
            </div>

            {/* Submit button */}
            <div className="trade_submit">
              <button className="submit_button">Buy $aCO2</button>
            </div>

          </div>

        </div>
      </div>


    </div>
  )
}

export default page