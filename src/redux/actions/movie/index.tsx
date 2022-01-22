import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async () => {
    return fetch(`https://api.tvmaze.com/shows`)
      .then((res: Response) => res.json())
      .catch((err: string) => console.log(" error bro"));
  }
);

interface IProd {
  movies: any[];
}

const initialState: IProd = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending.toString()]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled.toString()]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      state.movies = payload;
    },
    [fetchAsyncMovies.rejected.toString()]: () => {
      console.log("Rejected!");
    },
  },
});

export default movieSlice.reducer;
