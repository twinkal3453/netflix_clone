import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",

  initialState: {
    movie: [],
  },
  reducers: {
    movieList: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { movieList } = movieSlice.actions;

export const selectMovie = (state) => state.movie.movie;

export default movieSlice.reducer;
