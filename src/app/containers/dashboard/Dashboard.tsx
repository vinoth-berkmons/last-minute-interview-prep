import './Dashboard.css';

import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../store/redux/Store';
import { Card, QuestionsCard } from '../../common/components';
import { DASHBOARD_STATISTICS } from '../../common/constants/constants';
import { CardStyle, StatisticsLabel } from '../../common/models/Common';
import { selectDashboardStatistics } from './redux/dashboardSlice';
import { GetDashboardStatistics } from './service/dashboardService';
import { GetQuestionList } from '../../common/services/questions';
import { selectQuestions } from '../../../store/redux/common/questionsSlice';


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
    }, [])

    useEffect(() => {
        dispatch(GetQuestionList())
    }, [])

    /**
     * Get the list of statistics
     */
    const statistics = useTypedSelector(selectDashboardStatistics)
    const questions = useTypedSelector(selectQuestions)

    /**
     * Prepare props for Question component
     */
    const cardStyle: CardStyle = {
        headerTitle: "Today's Questions",
        bg: "bg-white"
    }

    return (
        <>
            { /**
                Prepare data for dashboard statistics and pass to the component
            */}
            <div className="container mx-auto p-3">
                <div className="flex flex-wrap -mx-2 overflow-hidden">
                    {statistics.status === 'loading' ? "Loading...." :
                        statistics.statistics.map(statistic => {
                            const labelCaps: StatisticsLabel = (statistic.label.toUpperCase()) as StatisticsLabel;
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

            { /**
                Prepare data for today's questions and pass to the question component
            */}
            <div className="container mx-auto p-3">
                {
                    questions.status === 'loading' ? 'Loading....' : <QuestionsCard
                        cardProp={questions.questions}
                        cardStyle={cardStyle} />
                }

            </div>
        </>
    )
}

export default Dashboard