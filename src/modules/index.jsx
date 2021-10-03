import { combineReducers } from "redux";
import counterReducer from "./counterSlice";

const rootReducer = combineReducers({
	counterReducer
});

export default rootReducer;