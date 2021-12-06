/**
 * StatisticsLabel is where type of statistics have in app and  displayed in dashboard
 */
export type StatisticsLabel = 'QUESTIONS' | 'TOPICS' | 'ASSIGNMENTS' | 'INTERVIEWS';
export interface DashboardStatistics {
    id: string;
    label: StatisticsLabel;
    count: number;
}

/**
 * list of questions
 */
export interface Questions {
    id: string;
    question: string;
    ans: string;
    label: string;
}


/**
 * Common card style
 */
export interface CardStyle {
    bg?: string;
    headerTitle?: string;
    color?: string;
}

/**
 * Http loading error state used for all the API call
 */
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


export type FetchHttpError = {
    message: string;
}


/** Routes */
export interface DefaultRouteConfig {
    id: string;
    link: string;
    label: string;
}