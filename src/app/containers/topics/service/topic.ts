import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { FetchHttpError } from '../../../common/models/Common';
import { Topic } from '../../../common/models/Topics';

/**
 *  Get the list of topics
 * handle error and send the error message if it fails
 */

const GET_TOPICS = "https://lastminuteprep.mocklab.io/v1/topics"

export const GetTopics = createAsyncThunk<Topic[], void, { rejectValue: FetchHttpError }>(
    "topics/getTopics",
    async (_number, thunkApi) => {
        const response = await axios.get(GET_TOPICS);

        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch Topics"
            })
        }
        return response.data;
    }
)