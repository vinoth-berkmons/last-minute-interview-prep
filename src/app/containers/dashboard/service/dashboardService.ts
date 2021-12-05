import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DashboardStatistics, FetchHttpError } from "../../../common/models/Common";

/**
 *  Get the statistics data for the dashboard
 * call statistics api
 * handle error and send the error message if it fails
 */
const GET_STATISTICS = "http://lastminuteprep.mocklab.io/v1/statistics"

export const GetDashboardStatistics = createAsyncThunk<DashboardStatistics[], void, { rejectValue: FetchHttpError }>(
    "dashboard/getStatistics",
    async (_number, thunkApi) => {
        const response = await axios.get(GET_STATISTICS);

        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch Statistics"
            })
        }
        return response.data;
    }
)