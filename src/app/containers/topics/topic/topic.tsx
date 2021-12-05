import { FC } from 'react';
import { Topic } from '../../../common/models/Topics';

/**
 * 
 * show the list of topics
 * @returns 
 */

const TopicItem: FC<Props> = ({cardProp}) => {
    return (
        <>
            <div className="flex align-middle mb-7">
                <div className="qus-title mr-7">
                    <p>
                        {cardProp.label}
                    </p>
                </div>
            </div>
        </>
    )
}

export { TopicItem }

interface Props {
    cardProp: Topic;
}