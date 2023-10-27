import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardList: [],
    cardIsOpen: false,
  },
  reducers: {
    openCardModal: (state) => {
      state.cardIsOpen = true;
    },
  },
});

export const { openCardModal } = cardSlice.actions;
export default cardSlice.reducer;
