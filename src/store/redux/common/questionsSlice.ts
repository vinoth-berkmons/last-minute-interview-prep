import { createSlice } from '@reduxjs/toolkit';
import { QuestionsHttpState } from '../../../app/common/models/Common';
import { GetQuestionList } from '../../../app/common/services/questions';
import { RootState } from '../RootReducer';

const initialState = {
    questions: [],
    status: "done",
    error: null
} as QuestionsHttpState



export const selectQuestionsStatus = (state: RootState) => state.questions.status;
export const selectQuestions = (state: RootState) => state.questions;


const questionsSlice = createSlice({
    name: "topic",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(GetQuestionList.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(GetQuestionList.fulfilled, (state, { payload }) => {
            state.questions = payload;
            state.status = "done";
        });
        builder.addCase(GetQuestionList.rejected, (state, { payload }) => {
            if (payload) {
                state.error = payload.message;
            }
            state.status = "done";
        })
    }
});

export default questionsSlice.reducer;