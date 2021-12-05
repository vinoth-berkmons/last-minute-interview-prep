import React, { FC } from 'react';

import { CardStyle, DashboardStatistics } from '../../models/Common';

/**
 * This component serve the purpose of showing the statistics of the App
 * card type component, each card hold each category of the app
 * @returns 
 */

const Card: FC<Props> = ({ cardProp, cardStyle }) => {
    return (
        <>
            <div className="my-2 px-2 w-1/2 overflow-hidden">
                <div className={`card ${cardStyle.bg}`}>
                    <div className="card-body">
                        <h5 className="text-lg mb-4 mt-0">{cardProp.label}</h5>
                        <p className=" text-2xl">{cardProp.count}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Card }

interface Props {
    cardProp: DashboardStatistics;
    cardStyle: CardStyle
}
