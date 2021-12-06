import { combineReducers } from "redux";
import dashboardSlice from "../../app/containers/dashboard/redux/dashboardSlice";
import topicSlice from "../../app/containers/topics/redux/topicSlice";
import questionsSlice from "./common/questionsSlice";


/**
 * All the common reducers placed in store->redux->common
 * Other reducers are placed in respective directory
 */

/**
 * Root reducer holds all the reducer of the app
*/
export const rootReducer = combineReducers({
    topics: topicSlice,
    dashboard: dashboardSlice,
    questions: questionsSlice
})

export type RootState = ReturnType<typeof rootReducer>

