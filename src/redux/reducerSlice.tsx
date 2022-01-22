import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from "../redux/actions/authSlice";

import movieSlice from "../redux/actions/movie/index";

const rootReducer = combineReducers({
  user: userSliceReducer,
  movie: movieSlice,
});

export default rootReducer;
