import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from "../redux/actions/authSlice";


const rootReducer = combineReducers({
    user: userSliceReducer,
});

export default rootReducer;