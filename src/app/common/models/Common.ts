export interface DashboardStatistics {
    title: string;
    count: number;
}



export interface CardProp extends DashboardStatistics {
    style: {
        bg: string;
    }
}