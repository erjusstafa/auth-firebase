import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from "../redux/actions/authSlice";
import movieSliceReducer from "../redux/actions/movie/index";

const rootReducer = combineReducers({
  user: userSliceReducer,
  movie: movieSliceReducer,
});

export default rootReducer;
