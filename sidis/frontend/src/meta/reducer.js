import { combineReducers } from "redux";
import loading from '../db/reducer/loading'
import card from '../db/reducer/card'
import task from '../db/reducer/task'

export default combineReducers({
    loading,
    card,
    task
});