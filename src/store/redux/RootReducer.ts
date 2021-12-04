import { combineReducers } from "redux";
import dashboardSlice from "../../app/containers/dashboard/redux/dashboardSlice";
import topicSlice from "../../app/containers/topics/redux/topicSlice";
import questionsSlice from "./common/questionsSlice";

export const rootReducer = combineReducers({
    topics: topicSlice,
    dashboard: dashboardSlice,
    questions: questionsSlice
})

export type RootState = ReturnType<typeof rootReducer>

