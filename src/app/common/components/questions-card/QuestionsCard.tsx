import { FC } from 'react';

import { QuestionsCardProps } from '../../models/Topics';



const QuestionsCard: FC<Props> = ({ cardProp }) => {
    return (
        <>
            <div className="card bg-white">
                <div className="card-header header-text text-2xl">
                    <p>{cardProp.header}</p>
                </div>
                <div className="card-body">
                    {
                        cardProp.questions.map((question) => {

                            return <div className="flex align-middle mb-7" key={question.id}>
                                <div className="qus-title mr-7">
                                    <p>
                                        {question.title}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <span className="badge badge-light-info">default</span>
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
    cardProp: QuestionsCardProps;
}
