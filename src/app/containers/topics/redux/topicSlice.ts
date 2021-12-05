import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/redux/RootReducer';
import { TopicHttpState } from '../../../common/models/Topics';
import { GetTopics } from '../service/topic';

/**
 * 
 * @param state contains all the reducer
 * create statistics selector to get the details of statistics
 * create selector for selecting status of the statistics API
 * @returns 
 */



/**
 * Setup initial state when the page loads
 */
const initialState = {
    topics: [],
    status: "done",
    error: null
} as TopicHttpState



export const selectTopicStatus = (state: RootState) => state.topics.status;
export const selectTopics = (state: RootState) => state.topics;


/**
 * create slice for list of topics.
 * setup name, initial state, reducer and extra reducer
 * handle the state of the api in extra reducer
 */
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