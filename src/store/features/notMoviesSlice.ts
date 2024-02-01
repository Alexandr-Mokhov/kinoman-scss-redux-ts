import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
  notFoundMovies: boolean;
}

const initialState: TypeInitialState = {
  notFoundMovies: false,
}

const notMoviesSlice = createSlice({
  name: 'notMovies',
  initialState,
  reducers: {
    setNotFoundMovies(state, action) {
      state.notFoundMovies = action.payload;
    }
  }
})

export const { setNotFoundMovies } = notMoviesSlice.actions;
export default notMoviesSlice.reducer;
