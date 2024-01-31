import { createSlice } from "@reduxjs/toolkit";

type TypeLoggedIn = {
  loggedIn: boolean
}

const initialState: TypeLoggedIn = {
	loggedIn: false,
}

const loggedSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    }
  }
})

export const { setLoggedIn } = loggedSlice.actions;
export default loggedSlice.reducer;

