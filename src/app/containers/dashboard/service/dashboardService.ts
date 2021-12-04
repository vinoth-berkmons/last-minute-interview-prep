import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DashboardStatistics, FetchHttpError } from "../../../common/models/Common";


const GET_STATISTICS = "https://mocki.io/v1/a982a2ee-f9ed-42ff-9b3e-577221d095f2"

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