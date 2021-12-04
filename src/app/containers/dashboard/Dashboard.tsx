import './Dashboard.css';

import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../store/redux/Store';
import { Card } from '../../common/components';
import { DASHBOARD_STATISTICS } from '../../common/constants/constants';
import { StatisticsLabel } from '../../common/models/Common';
import { selectDashboardStatistics } from './redux/dashboardSlice';
import { GetDashboardStatistics } from './service/dashboardService';


/**
 * This is the Dashboard Page where user will be seeing after Page load
 * Create a card component
 * create a question component
 * Get statistics data of topics, questions, HR and interviews
 * Pass the data to the components 
 * @returns
 */
const Dashboard: FC = () => {

    /**
     * Declare dispatch
     */
    const dispatch = useDispatch();

    /**
     * Use useEffect to dispatch the get topics when page loads
     */
    useEffect(() => {
        dispatch(GetDashboardStatistics())
    })

    /**
     * Get the list of statistics
     */
    const statistics = useTypedSelector(selectDashboardStatistics)

    /**
     * Prepare props for Question component
     */
    // const QuestionsProp: QuestionsCardProps = {
    //     header: "Today's Questions",
    //     style: {
    //         bg: "bg-white"
    //     },
    //     questions: topic.topics
    // }
    return (
        <>
            <div className="container mx-auto p-3">
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        {statistics.status === 'loading' ? "Loading...." :
                            statistics.statistics.map(statistic => {
                                const labelCaps: StatisticsLabel = statistic.label.toUpperCase() as StatisticsLabel;
                                const style = DASHBOARD_STATISTICS[`${labelCaps}`].style;
                                return <Card
                                    key={statistic.id}
                                    cardProp={statistic}
                                    cardStyle={style} />
                            }
                            )
                        }
                    </div>
                </div>
            </div>

            {/* <div className="container mx-auto p-3">
                <QuestionsCard cardProp={QuestionsProp} />
            </div> */}
        </>
    )
}

export default Dashboard