import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/redux/RootReducer";
import { DashboardHttpState } from "../../../common/models/Common";
import { GetDashboardStatistics } from "../service/dashboardService";

/**
 * 
 * @param state contains all the reducer
 * create statistics selector to get the details of statistics
 * create selector for selecting status of the statistics API
 * @returns 
 */
export const selectDashboardStatisticsStatus = (state: RootState) => state.dashboard.status;
export const selectDashboardStatistics = (state: RootState) => state.dashboard;

/**
 * Setup initial state when the page loads
 */
const initialState = {
    statistics: [],
    status: "done",
    error: null
} as DashboardHttpState


/**
 * create slice for dashboard statistics.
 * setup name, initial state, reducer and extra reducer
 * handle the state of the api in extra reducer
 */
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetDashboardStatistics.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(GetDashboardStatistics.fulfilled, (state, { payload }) => {
            state.statistics = payload;
            state.status = "done";
        });
        builder.addCase(GetDashboardStatistics.rejected, (state, { payload }) => {
            if (payload) {
                state.error = payload.message;
            }
            state.status = "done";
        })
    }
})

export default dashboardSlice.reducer;