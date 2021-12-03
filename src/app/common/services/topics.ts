import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchTopicError, Topic } from "../models/Topics";

const BASE_URL = "https://mocki.io/v1/85912c26-b2aa-4ae3-9b4f-eedd4b6afc4f";

export const GetQuestions = createAsyncThunk(
    "questions/getQuestions",
    async () => await axios.get(`${BASE_URL}`)
);

export const GetTopics = createAsyncThunk<Topic[], unknown, { rejectValue: FetchTopicError }>(
    "topics/getTopics",
    async (_number, thunkApi) => {
        const response = await axios.get(BASE_URL);

        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch Topics"
            })
        }
        return response.data;
    }
)

