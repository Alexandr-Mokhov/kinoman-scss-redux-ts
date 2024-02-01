import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
  isLoading: boolean;
}

const initialState: TypeInitialState = {
  isLoading: false,
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
})

export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
