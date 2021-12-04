import { HttpLoadingAndErrorState } from "./Common";

export type TopicId = string;

export interface Topic {
    id: string;
    label: string;
    subTopic: SubTopic[]
}

interface SubTopic {

    id: string;
    label: string;
}
export interface Questions {
    id: string;
    title: string;
    answer?: string
}

export interface TopicHttpState extends HttpLoadingAndErrorState {
    topics: Topic[];
}