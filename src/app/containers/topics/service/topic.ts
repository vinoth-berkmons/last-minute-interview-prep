import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { FetchHttpError } from '../../../common/models/Common';
import { Topic } from '../../../common/models/Topics';




const GET_TOPICS = "https://mocki.io/v1/a982a2ee-f9ed-42ff-9b3e-577221d095f2"

export const GetTopics = createAsyncThunk<Topic[], void, { rejectValue: FetchHttpError }>(
    "dashboard/getStatistics",
    async (_number, thunkApi) => {
        const response = await axios.get(GET_TOPICS);

        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch Statistics"
            })
        }
        return response.data;
    }
)