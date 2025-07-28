import React from 'react';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';

const proposals = [
    {
        id: '#001',
        title: 'Fund Community Marketing Campaign',
        description: 'Allocate 50,000 $SEED from the DAO Treasury to fund a Q4 2025 community-led marketing initiative',
        likeCount: '1,200 $aCO₂',
        dislikeCount: '300 $aCO₂',
        likePercentage: 80,
        dislikePercentage: 20,
        progress: 75,
        status: 'Voting Open',
    },
    {
        id: '#002',
        title: 'Support Green Tech Startups',
        description: 'Propose a 100,000 $SEED investment in early-stage climate tech projects in Southeast Asia.',
        likeCount: '1,000 $aCO₂',
        dislikeCount: '200 $aCO₂',
        likePercentage: 83,
        dislikePercentage: 17,
        progress: 83,
        status: 'Voting Open',
    },
    {
        id: '#003',
        title: 'Host Eco-Con in Nairobi',
        description: 'Allocate 70,000 $SEED to organize a global eco-innovation conference in Nairobi.',
        likeCount: '1,500 $aCO₂',
        dislikeCount: '100 $aCO₂',
        likePercentage: 94,
        dislikePercentage: 6,
        progress: 94,
        status: 'Voting Open',
    },
];

function OverviewProposal() {
    return (
        <>
            {proposals.map((proposal, index) => (
                <div className='glass_card proposal_card' key={index}>
                    {/* Right Content */}
                    <div className='proposal_content'>
                        {/* Header Section */}
                        <div className='proposal_header'>
                            <p className='proposal_id'>{proposal.id}</p>
                            <div className='proposal_title_box'>
                                <p className='proposal_title'>{proposal.title}</p>
                                <button className='voting_status'>{proposal.status}</button>
                            </div>
                        </div>

                        {/* Description */}
                        <p className='proposal_description'>{proposal.description}</p>

                        {/* View Proposal Button */}
                        <button className='view_proposal_btn'>View Full Proposal</button>

                        {/* Vote Breakdown */}
                        <div className='vote_breakdown'>
                            <div className='vote_percentages'>
                                <div className='vote_option_like'>
                                    <p className='vote_icon_like'><BiSolidLike /></p>
                                    <p className='vote_value_like'>{proposal.likeCount} ({proposal.likePercentage}%)</p>
                                </div>
                                <div className='vote_option_dislike'>
                                    <p className='vote_icon_dislike'><BiSolidDislike /></p>
                                    <p className='vote_value_dislike'>{proposal.dislikeCount} ({proposal.dislikePercentage}%)</p>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className='vote_progress_bar'>
                                <div
                                    className='vote_progress_fill'
                                    style={{ width: `${proposal.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Left Voting Buttons */}
                    <div className='vote_buttons'>
                        <div className='vote_btn like_btn'>
                            <BiSolidLike />
                        </div>
                        <div className='vote_btn dislike_btn'>
                            <BiSolidDislike />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default OverviewProposal;
