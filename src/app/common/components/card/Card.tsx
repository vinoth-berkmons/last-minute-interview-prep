import React, { FC } from "react"
import { CardProp, DashboardStatistics } from "../../models/Common"


const Card: FC<Props> = ({ cardProp }) => {
    return (
        <>
            <div className={`card ${cardProp.style.bg}`}>
                <div className="card-body">
                    <h5 className="text-lg mb-4 mt-0">{cardProp.title}</h5>
                    <p className=" text-2xl">{cardProp.count}</p>
                </div>
            </div>
        </>
    )
}

export { Card }

interface Props {
    cardProp: CardProp;
}
