import React from 'react';
import Image from 'next/image';

const assetData = [
    {
        id: 1,
        name: "Ancient Sapling #001",
        rarity: "Legendary Rarity",
        image: "/images/cartbg3.png",
    },
    {
        id: 2,
        name: "Ancient Sapling #002",
        rarity: "Rare Rarity",
        image: "/images/currentTier2.png",
    },
    {
        id: 3,
        name: "Ancient Sapling #003",
        rarity: "Epic Rarity",
        image: "/images/featured_trending1.png",
    },
    {
        id: 4,
        name: "Ancient Sapling #004",
        rarity: "Legendary Rarity",
        image: "/images/cartbg3.png",
    },
    {
        id: 5,
        name: "Ancient Sapling #005",
        rarity: "Mythic Rarity",
        image: "/images/featured_trending1.png",
    },
    {
        id: 6,
        name: "Ancient Sapling #006",
        rarity: "Legendary Rarity",
        image: "/images/cartbg3.png",
    },
    {
        id: 7,
        name: "Ancient Sapling #007",
        rarity: "Rare Rarity",
        image: "/images/currentTier2.png",
    },
    {
        id: 8,
        name: "Ancient Sapling #008",
        rarity: "Legendary Rarity",
        image: "/images/currentTier1.png",
    },
];

function TreasuryAssets() {
    return (
        <div className="treasury_assets_section glass_card">
            <p className="treasury_assets_heading">Other Assets</p>

            <div className="treasury_assets_grid">
                {assetData.map((asset) => (
                    <div className="asset_card" key={asset.id}>
                        <Image
                            src={asset.image}
                            alt={asset.name}
                            width={60}
                            height={72}
                            className="asset_image"
                        />
                        <div className="asset_info">
                            <p className="asset_title">{asset.name}</p>
                            <p className="asset_rarity">{asset.rarity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TreasuryAssets;
