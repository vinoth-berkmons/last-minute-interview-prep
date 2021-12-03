import React, { FC } from 'react';

import { TopicItem } from './topic/topic';

const topics = [
    {
        id: '22222',
        title: 'Front-end',
    },
    {
        id: '22222',
        title: 'Back-end',
    },
    {
        id: '22222',
        title: 'HR',
    },

    {
        id: '22222',
        title: 'Salary Negotiation',
    }
]

const Topics: FC = () => {
    return (
        <>
            <div className="container mx-auto p-3">
                <div className="card bg-white">
                    <div className="card-body text-black">
                        {
                            topics.map(topic => {
                                return <TopicItem key={topic.id} cardProp={topic} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topics;