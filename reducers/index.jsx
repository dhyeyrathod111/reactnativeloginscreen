import { combineReducers } from "redux";
import loginReducer from '../reducers/loginReducers'

export const rootReducer = combineReducers({
    loginReducer,
})