import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchHttpError, Questions } from "../models/Common";

const QUESTIONS_LIST = "https://lastminuteprep.mocklab.io/v1/questions";



export const GetQuestionList = createAsyncThunk<Questions[], void, { rejectValue: FetchHttpError }>(
    "questions/getQuestionsList",
    async (_number, thunkApi) => {
        const response = await axios.get(QUESTIONS_LIST);

        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch Questions"
            })
        }
        return response.data;
    }
)