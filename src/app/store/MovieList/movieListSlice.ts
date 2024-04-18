import { createSlice } from "@reduxjs/toolkit";

import { IAppSlider as IWebsite } from "../../interface";
import { listObj } from "../../utils";

const INITIAL_STATE: IWebsite = {
  error: null,
  loading: false,
  hasMoreData: false,
  moveSliderList: listObj,
};
console.log('INITIAL_STATE', INITIAL_STATE);
export const movieData = createSlice({
  name: "movieList",
  initialState: INITIAL_STATE,

  reducers: {
    fetchMovieListStart: (state: any, action) => {
      state.loading = true;
    },
    fetchMovieListFailure: (state: any, action) => {
      state.moveSliderList = action.payload;
      state.hasMoreData = action.payload.hasMore;
      state.loading = false;
    },
    fetchMovieListSuccess: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMovieListStart,
  fetchMovieListFailure,
  fetchMovieListSuccess,
} = movieData.actions;

export default movieData.reducer;
