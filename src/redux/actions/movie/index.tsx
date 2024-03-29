import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchAsyncMovies = createAsyncThunk("movie/fetchAsyncMovies", async () => {
  return fetch(`https://api.tvmaze.com/show`)
    .then((res: Response) => res.json())
    .catch((err: string) => console.log(" error ",err));
});


export const fetchAsyncMoviesDetails = createAsyncThunk(
  'movie/fetchAsyncMoviesDetails',
  async (id  : string ) => {
      return fetch(`https://api.tvmaze.com/shows/${id}` )
        .then((res: Response) => res.json())
        .catch((err: string) => console.log(" error ", err));
        },
)
export interface IProd {
  movies: IMovie[];
  detailMov : IMovie [];
}

export interface IMovie {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: ISchedule;
  rating: IRating;
  weight: number;
  network: INetwork;
  webChannel: null;
  dvdCountry: null;
  externals: IExternals;
  image: IImage;
  summary: string;
  updated: string;
  _links: ILinks;
}

interface ISchedule {
  time: string;
  days: string[];
}

interface IRating {
  avarage: number;
}

interface INetwork {
  id: number;
  name: string;
  country: ICountry;
}

interface ICountry {
  name: string;
  code: string;
  timezone: string;
}

interface IExternals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface IImage {
  medium: string;
  original: string;
}

interface ILinks {
  self: {
    href: string;
  };
  previousepisode: {
    href: string;
  };
}
const initialState: IProd = {
  movies: [],
  detailMov : []
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending.toString()]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled.toString()]: (state, { payload }: PayloadAction<IMovie[]>) => {
      console.log("Fetched Successfully!");
      state.movies = payload;
    },
    [fetchAsyncMovies.rejected.toString()]: () => {
      console.log("Rejected!");
    },



    [fetchAsyncMoviesDetails.pending.toString()]: () => {
      console.log("Pending");
    },
    [fetchAsyncMoviesDetails.fulfilled.toString()]: (state, { payload }: PayloadAction<IMovie[]>) => {
      console.log("Fetched Successfully!");
      state.detailMov = payload;
    },
    [fetchAsyncMoviesDetails.rejected.toString()]: () => {
      console.log("Rejected!");
    },
  },
});

export default movieSlice.reducer;
