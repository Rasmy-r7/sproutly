// app/dashboard/page.jsx

import React from 'react';
import './page.css'
import PageHeader from '@/components/pageHeader/PageHeader';
import { IoMdArrowDropdown } from "react-icons/io";
import Image from 'next/image';





function Page() {
  return (
    <div className='dashboard'>
      <PageHeader title="Dashboard" />
      <div className='cart'>
        <div className='left'>
          <p className='total'>Total Sproutly Portfolio</p>
          <h1>$28,543.78</h1>
          <div className='left_bottom'>
            <IoMdArrowDropdown className="arrow_icon" />
            <p>
              <span className="percent">+3.2%</span> in 24 hours
            </p>
          </div>

        </div>
        <div className='right'>
          <Image
            src="/images/cart_right.png"
            alt="Profile"
            width={113}
            height={165}
            className="cart_right_img"
          />

          <div className='right_to_right'>

          </div>
        </div>

      </div>


    </div>
  );
}

export default Page;
