import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
  errorText: string
}

const initialState: TypeInitialState = {
  errorText: '', 
}

const errorSlice = createSlice({
  name: 'errorText',
  initialState,
  reducers: {
    setErrorText(state, action) {
      state.errorText = action.payload;
    }
  }
})

export const { setErrorText } = errorSlice.actions;
export default errorSlice.reducer;
