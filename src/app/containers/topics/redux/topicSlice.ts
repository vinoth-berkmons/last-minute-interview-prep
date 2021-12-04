import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/redux/RootReducer';
import { TopicHttpState } from '../../../common/models/Topics';
import { GetTopics } from '../service/topic';



const initialState = {
    topics: [],
    status: "done",
    error: null
} as TopicHttpState



export const selectTopicStatus = (state: RootState) => state.topics.status;
export const selectTopics = (state: RootState) => state.topics;


const topicSlice = createSlice({
    name: "topic",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(GetTopics.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(GetTopics.fulfilled, (state, { payload }) => {
            state.topics = payload;
            state.status = "done";
        });
        builder.addCase(GetTopics.rejected, (state, { payload }) => {
            if (payload) {
                state.error = payload.message;
            }
            state.status = "done";
        })
    }
});

export default topicSlice.reducer;