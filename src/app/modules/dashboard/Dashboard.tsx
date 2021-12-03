import './Dashboard.css';

import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../setup/redux/Store';
import { DASHBOARD_STATISTICS } from '../../common/constants/constants';
import { CardProp } from '../../common/models/Common';
import { selectTopics } from '../../common/redux/topics/topicSlice';
import { GetTopics } from '../../common/services/topics';
import { Card, QuestionsCard } from '../../common/components';
import { QuestionsCardProps } from '../../common/models/Topics';



const Dashboard: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetTopics())
    }, [])

    const topic = useTypedSelector(selectTopics)

    const statistics = DASHBOARD_STATISTICS;
    const questions: CardProp = { ...statistics['QUESTIONS'], count: 234 }
    const topics: CardProp = { ...statistics['TOPICS'], count: topic.topics.length }
    const interviews: CardProp = { ...statistics['INTERVIEWS'], count: 12 }
    const assignments: CardProp = { ...statistics['ASSIGNMENTS'], count: 36 }

    const QuestionsProp: QuestionsCardProps = {
        header: "Today's Questions",
        style: {
            bg: "bg-white"
        },
        questions: topic.topics
    }
    return (
        <>
            <div className="container mx-auto p-3">
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <Card cardProp={questions} />
                    </div>

                    <div className="flex-1">
                        {topic.status === 'loading' ? "Loading...." : <Card cardProp={topics} />}
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <Card cardProp={interviews} />
                    </div>
                    <div className="flex-1">
                        <Card cardProp={assignments} />
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-3">
                <QuestionsCard cardProp={QuestionsProp} />
            </div>
        </>
    )
}

export default Dashboard