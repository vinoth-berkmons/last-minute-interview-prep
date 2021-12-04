export type StatisticsLabel = 'QUESTIONS' | 'TOPICS' | 'ASSIGNMENTS' | 'INTERVIEWS';
export interface DashboardStatistics {
    id: string;
    label: StatisticsLabel;
    count: number;
}


export interface HttpLoadingAndErrorState {
    status: "loading" | "done";
    error: string | null;
}

export interface DashboardHttpState extends HttpLoadingAndErrorState {
    statistics: DashboardStatistics[];
}

export interface CardStyle {
    bg: string;
}

export type FetchHttpError = {
    message: string;
}
