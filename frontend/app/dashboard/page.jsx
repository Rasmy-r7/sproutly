// app/dashboard/page.jsx
'use client';


import React from 'react';
import './page.css'
import PageHeader from '@/components/pageHeader/PageHeader';
import Image from 'next/image';
import { FaSourcetree } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Area } from 'recharts';


const dashboardCards = [
  {
    title: "Your $aCO2 Balance",
    value: "17,236.45",
    icon1: <IoMdArrowDropdown />,
    change1: "-0.15%",
    note: "in 24 hours",
  },
  {
    title: "Amount Staked",
    value: "35,000",
    note: "Next payout in",
    span3: "2 hours"
  },
  {
    title: "Your Environmental Impact",
    value: "584",
    span1: "Trees",
    noteHighlight: "87.6 Tonnes",
    note: "CO2 Sequestered"
  },
  {
    title: "Your $SEED Balance",
    value: "45,230",
    icon2: <IoMdArrowDropup />,
    change2: "+3.2%",
    note: "in 24 hours",
  }
];
const chartData = [
  { name: '', sales: 0.235 },
  { name: 'Feb 04', sales: 0.240 },
  { name: '', sales: 0.245 },
  { name: 'Feb 06', sales: 0.247 },
  { name: '', sales: 0.246 },
  { name: 'Feb 08', sales: 0.242 },
  { name: '', sales: 0.245 },
  { name: 'Feb 10', sales: 0.252 },
  { name: '', sales: 0.254 },
  { name: 'Feb 12', sales: 0.253 },
  { name: '', sales: 0.252 },
  { name: 'Feb 14', sales: 0.256 },
  { name: '', sales: 0.259 },
  { name: 'Feb 16', sales: 0.260 },
  { name: '', sales: 0.261 },
  { name: '', sales: 0.262 },

];


function Page() {
  return (
    <div className='dashboard'>
      <PageHeader title="Dashboard" />
      <div className='cart'>
        <div className='left'>
          <p className='total'>Total Sproutly Portfolio</p>
          <h1>$28,543.78</h1>
          <div className='left_bottom'>
            <IoMdArrowDropup className="arrow_icon" />
            <p>
              <span className="percent">+3.2%</span> in 24 hours
            </p>
          </div>

        </div>
        <div className='right'>
          <Image
            src="/images/cart_right.png"
            alt="Profile"
            width={153}
            height={165}
            className="cart_right_img"
          />

          <div className="right_to_right">
            <p className="tier_label">Current Tier</p>
            <p className="tier_name">Forest Guardian</p>
            <p className="tier_goal">Plant 256 more trees to become an Eco-Baron</p>

            <div className="progress_bar_container">
              <div className="progress_bar_fill" style={{ width: "75%" }}></div>
            </div>

            <div className="plant_tree">
              <FaSourcetree />
              <p>Plant 1,000 Trees</p>
            </div>

            <button className="plant_btn">View All Achievements</button>
          </div>

        </div>

      </div>

      <div className="card-container">
        {dashboardCards.map((card, index) => (
          <div className="cards_map" key={index}>
            <p className="card_title">{card.title}</p>
            <p className="card_value">
              {card.value} {card.span1 && <span1 className='value_span'>{card.span1}</span1>}
            </p>

            <div className="card_footer">


              {card.change1 && (
                <p style={{ color: "rgba(239, 83, 80, 1)" }}>
                  {card.icon1 && <span style={{ fontSize: "18px" }}>{card.icon1}</span>}
                  {card.change1}
                </p>
              )}
              {card.change2 && (
                <p style={{ color: "rgba(46, 204, 113, 1)" }}>
                  {card.icon2 && <span style={{ fontSize: "18px" }}>{card.icon2}</span>}
                  {card.change2}
                </p>
              )}
              {(card.noteHighlight || card.note) && (
                <p>
                  {card.noteHighlight && (
                    <span style={{ color: "rgba(46, 204, 113, 1)" }}>{card.noteHighlight}</span>
                  )}
                  {card.note && ` ${card.note}`}
                  {card.span3 && (
                    <span style={{ color: "rgba(255, 160, 0, 1)" }}>{card.span3}</span>
                  )}
                </p>
              )}

            </div>
          </div>
        ))}
      </div>

      <div className='certification_graph'>
        <div className='certification'>
          <p className='latest'>Latest Certification</p>
          <div className=''>
            <div className='certification_cart'>
              <Image
                src="/images/certification_img.png"
                alt="certification"
                width={32}
                height={32}
                className="certification_img"
              />
              <div className='certification_right'>
                <p className='verification'>Carbon Offset Verification</p>
                <p className='number'>#058</p>
                <p className='issued'>Issued May 2025</p>
              </div>
            </div>
            <div className='certification_cart'>
              <Image
                src="/images/certification_img.png"
                alt="certification"
                width={32}
                height={32}
                className="certification_img"
              />
              <div className='certification_right'>
                <p className='verification'>Carbon Offset Verification</p>
                <p className='number'>#058</p>
                <p className='issued'>Issued May 2025</p>
              </div>
            </div>
          </div>
          <p className='ready'><span style={{ color: "rgba(46, 204, 113, 1)" }}>3 certificates</span> ready to generate!</p>
          <button className='certifications_btn'>
            View all 58 Certifications
          </button>

        </div>
        <div className='graph'>
          <div className='graph_heading'>
            <p className='market'>Market & Token Trends</p>
            <p className='market_value'>1 CBY = $0.25</p>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                {/* Define a blur-like gradient for glow */}
                <defs>
                  <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(173, 241, 81, 0.4)" />
                    <stop offset="100%" stopColor="rgba(173, 241, 81, 0)" />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke='rgba(174, 241, 81, 0.29)' />

                <XAxis
                  dataKey="name"
                  interval={0}
                  stroke="#ffffff"
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  stroke="#ffffff"
                  tick={{ fontSize: 12 }}
                  ticks={[0.22, 0.23, 0.24, 0.25, 0.26, 0.27]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(2, 44, 107, 0.8)",
                    borderColor: "#4b5563",
                    fontSize: "12px",
                  }}
                  itemStyle={{ color: "#e5e7eb" }}
                />

                {/* ✅ Shadow glow area */}
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="none"
                  fill="url(#glowGradient)"
                  fillOpacity={1}
                />

                {/* ✅ Main line */}
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="rgba(173, 241, 81, 1)"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>





    </div>
  );
}

export default Page;
