import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
  savedFilms: []
}

const initialState: TypeInitialState = {
  savedFilms: [],
}

const filmsSlice = createSlice({
  name: 'savedFilms',
  initialState,
  reducers: {
    setSavedFilms(state, action) {
      state.savedFilms = action.payload;
    }
  }
})

export const { setSavedFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
