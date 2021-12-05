import { FC } from 'react';
import { CardStyle, Questions } from '../../models/Common';


/**
 * QuestionsCard component is used to list all type of questions
 * this component contains questions, topic as badge
 * @param  
 * @returns 
 */

const QuestionsCard: FC<Props> = ({ cardProp, cardStyle }) => {
    return (
        <>
            <div className="card bg-white">
                <div className="card-header header-text text-2xl">
                    <p>{cardStyle.headerTitle}</p>
                </div>
                <div className="card-body">
                    {
                        cardProp.map((question) => {

                            return <div className="flex align-middle mb-7" key={question.id}>
                                <div className="qus-title mr-7">
                                    <p>
                                        {question.question}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <span className="badge badge-light-info">{question.label}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export { QuestionsCard }



interface Props {
    cardProp: Questions[];
    cardStyle: CardStyle
}
