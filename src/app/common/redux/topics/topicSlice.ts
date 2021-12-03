import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../setup/redux/RootReducer";
import { Topic } from "../../models/Topics";
import { GetTopics } from "../../services/topics";


type TopicState = {
    status: "loading" | "idle";
    error: string | null;
    topics: Topic[]
}

const initialState = {
    topics: [],
    status: "idle",
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
            state.topics.push(...payload);
            state.status = "idle";
        });
        builder.addCase(GetTopics.rejected, (state, { payload }) => {
            if (payload) {
                state.error = payload.message;
            }
            state.status = "idle";
        })
    }
});

export default topicSlice.reducer;