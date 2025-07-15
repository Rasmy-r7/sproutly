import React from 'react'
import "./PageHeader.css"
import { RiFolderOpenFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

function PageHeader({ title }) {
    return (
        <div className='pageheader'>
            <div className='elementName'>
                <p>{title}</p>
            </div>
            <div className='right_element'>
                <button>
                    <RiFolderOpenFill />
                    Connect wallet
                </button>
                <div className='svgimg'>
                    <TbWorld />
                </div>
                <div className='svgimg'>
                    <IoMdNotificationsOutline />
                </div>
                <div className='svgimg'>
                    <IoSettingsOutline />
                </div>
            </div>

        </div>
    )
}

export default PageHeader