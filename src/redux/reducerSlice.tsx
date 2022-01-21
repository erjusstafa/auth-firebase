import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from "../redux/actions/authSlice";
import { reducerAction } from "./actions/Todo";


const rootReducer = combineReducers({
    user: userSliceReducer,
});

export default rootReducer;