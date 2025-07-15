'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaHome, FaDatabase, FaHandHolding } from 'react-icons/fa';
import { RiExchangeFill } from "react-icons/ri";
import { SlCalculator } from "react-icons/sl";
import { GrNotes } from "react-icons/gr";
import { PiMapPinAreaBold } from "react-icons/pi";
import { BsBarChartFill } from "react-icons/bs";
import { SiKhanacademy } from "react-icons/si";
import { IoBagHandle } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import "./Sidebar.css";
// import "../../public/images/sidebarimg.jpg"
import Image from 'next/image';

const sidebarFallback = [
    { name: "Dashboard", icon: FaHome, href: "/dashboard" },
    { name: "Tokens", icon: FaDatabase, href: "/tokens" },
    { name: "My NFTs", icon: SiKhanacademy, href: "/mynfts" },
    { name: "Staking", icon: FaHandHolding, href: "/staking" },
    { name: "Marketplace", icon: IoBagHandle, href: "/marketplace" },
    { name: "CO2 Pools", icon: CgDetailsMore, href: "/copools" },
    { name: "Exchange", icon: RiExchangeFill, href: "/exchange" },
    { name: "Calculator", icon: SlCalculator, href: "/calculator" },
    { name: "Tree Overview", icon: GrNotes, href: "/overview" },
    { name: "Map Tree", icon: PiMapPinAreaBold, href: "/map" },
    { name: "Leaderboard", icon: BsBarChartFill, href: "/leaderboard" },
];

function Sidebar() {
    // const [sidebarItems, setSidebarItems] = useState([]);
    const pathname = usePathname();

    // useEffect(() => {
    //     setSidebarItems(sidebarFallback);
    // }, []);

    return (
        <div className="sidebar">
            <nav className="sidebar_nav">
                <div className='sidebar_header'>
                    <Image
                        src="/images/sidebarimg.jpg"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="sidebar_img"
                    />
                    <p>Rasmy</p>

                </div>
                {sidebarFallback.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.name} href={item.href}>
                            <div className={`sidebar_item ${isActive ? "active" : ""}`}>
                                <Icon className="sidebar_icon" />
                                <span className="sidebar_text">{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

export default Sidebar;
