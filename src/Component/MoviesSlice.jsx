import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("fetchMovies/getPost", async () => {
  try {
    const { data } = await axios(
      // "https://api.themoviedb.org/3/discover/movie?api_key=784606060685ad3309ab36d5adb48695&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

      "https://api.themoviedb.org/3/trending/all/day?api_key=784606060685ad3309ab36d5adb48695"
    );
    return data;
  } catch (err) {
    return err.message;
  }
});
const initialState = {
  showMovies: [],
};
const moviesSlice = createSlice({
  name: "fetchMovies",
  initialState,

  extraReducers: {
    [getPost.fulfilled]: (state, { payload }) => {
      state.showMovies = payload;
      // console.log(payload);
    },
  },
});

export default moviesSlice.reducer;
