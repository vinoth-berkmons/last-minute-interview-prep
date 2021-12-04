export type TopicId = string;

export type Topic = {
    id: TopicId;
    title: string;
}

export interface TopicStatistics {
    title: string;
    count: string;
}

export interface QuestionStatistics {
    title: string;
    count: string;
}


export interface Questions {
    id: string;
    title: string;
    answer?: string
}

export interface QuestionsCardProps {
    header: string;
    questions: Questions[];
    style: {
        bg: string;
    }
}
