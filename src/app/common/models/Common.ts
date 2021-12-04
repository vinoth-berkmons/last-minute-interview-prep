export type StatisticsLabel = 'QUESTIONS' | 'TOPICS' | 'ASSIGNMENTS' | 'INTERVIEWS';
export interface DashboardStatistics {
    id: string;
    label: StatisticsLabel;
    count: number;
}

export interface Questions {
    id: string;
    question: string;
    ans: string;
    label: string;
}

export interface HttpLoadingAndErrorState {
    status: "loading" | "done";
    error: string | null;
}

export interface DashboardHttpState extends HttpLoadingAndErrorState {
    statistics: DashboardStatistics[];
}

export interface QuestionsHttpState extends HttpLoadingAndErrorState {
    questions: Questions[];
}

export interface CardStyle {
    bg?: string;
    headerTitle?: string;
    color?: string;
}

export type FetchHttpError = {
    message: string;
}
