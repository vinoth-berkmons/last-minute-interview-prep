export interface DashboardStatistics {
    title: string;
    count: string;
}



export interface CardProp extends DashboardStatistics {
    style: {
        bg: string;
    }
}