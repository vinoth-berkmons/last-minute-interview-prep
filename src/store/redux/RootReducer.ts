import { combineReducers } from "redux";
import dashboardSlice from "../../app/containers/dashboard/redux/dashboardSlice";
import topicSlice from "../../app/containers/topics/redux/topicSlice";

export const rootReducer = combineReducers({
    topics: topicSlice,
    dashboard: dashboardSlice
})

export type RootState = ReturnType<typeof rootReducer>

