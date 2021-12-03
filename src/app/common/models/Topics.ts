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

export type FetchTopicError = {
    message: string;
}
