import { createSlice } from "@reduxjs/toolkit";
import { Topic } from "../../../app/common/models/Topics";
import { RootState } from "../RootReducer";


type TopicState = {
    status: "loading" | "done";
    error: string | null;
    topics: Topic[]
}

const initialState = {
    topics: [],
    status: "done",
    error: null,
} as TopicState

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