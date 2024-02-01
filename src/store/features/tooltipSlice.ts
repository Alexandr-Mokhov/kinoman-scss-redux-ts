import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
  infoTooltipOpen: boolean;
  infoTooltipMessage: string;
}

const initialState: TypeInitialState = {
  infoTooltipOpen: false,
  infoTooltipMessage: '',
}

const tooltipSlice = createSlice({
  name: 'infoTooltip',
  initialState,
  reducers: {
    setInfoTooltip(state, action) {
      state.infoTooltipOpen = action.payload.isOpen;
      state.infoTooltipMessage = action.payload.message;
    }
  }
})

export const { setInfoTooltip } = tooltipSlice.actions;
export default tooltipSlice.reducer;