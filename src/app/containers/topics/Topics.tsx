import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../store/redux/Store';
import { selectTopics } from './redux/topicSlice';
import { GetTopics } from './service/topic';

import { TopicItem } from './topic/topic';



const Topics: FC = () => {

    /**
    * Declare dispatch
    */
    const dispatch = useDispatch();

    /**
     * Use useEffect to dispatch the get topics when page loads
     */
    useEffect(() => {
        dispatch(GetTopics())
    })

    /**
     * Get the list of topics
     */
    const topics = useTypedSelector(selectTopics)

    return (
        <>
            <div className="container mx-auto p-3">
                <div className="card bg-white">
                    <div className="card-body text-black">
                        {
                            topics.topics.map(topic => {
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
