import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../setup/redux/Store";
import { Card } from "../../common/components/card/Card";
import { DASHBOARD_STATISTICS } from "../../common/constants/constants";
import { CardProp } from "../../common/models/Common";
import { selectTopics, selectTopicStatus } from "../../common/redux/topics/topicSlice";
import { GetTopics } from "../../common/services/topics";

import './Dashboard.css'


const Dashboard: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetTopics(''))
    }, [])

    const topic = useTypedSelector(selectTopics)

    const statistics = DASHBOARD_STATISTICS;
    const questions: CardProp = { ...statistics['QUESTIONS'], count: 234 }
    const topics: CardProp = { ...statistics['TOPICS'], count: topic.topics.length }
    const interviews: CardProp = { ...statistics['INTERVIEWS'], count: 12 }
    const assignments: CardProp = { ...statistics['ASSIGNMENTS'], count: 36 }
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
                <div className="card bg-white">
                    <div className="card-header header-text text-2xl">
                        <p>Todays' Questions</p>
                    </div>
                    <div className="card-body">
                        <div className="flex align-middle mb-7">
                            <div className="qus-title mr-7">
                                <p>
                                    Explain Concurrency?
                                </p>
                            </div>
                            <div className="text-center">
                                <span className="badge badge-light-info">Golang</span>
                            </div>
                        </div>

                        <div className="flex align-middle mb-7">
                            <div className="qus-title mr-7">
                                <p>
                                    What is Lazy loading?
                                </p>
                            </div>
                            <div className="text-center">
                                <span className="badge badge-light-primary">Frontend</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard