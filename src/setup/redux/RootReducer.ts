import { combineReducers } from "redux";
import topicSlice from "../../app/common/redux/topics/topicSlice";

export const rootReducer = combineReducers({
    topics: topicSlice
})

export type RootState = ReturnType<typeof rootReducer>

