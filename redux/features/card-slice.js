import { createSlice } from "@reduxjs/toolkit";

const cardTestData = [
  {
    enWord: "Water",
    deWord: "Wasser",
  },
  {
    enWord: "Bread",
    deWord: "Brot",
  },
  {
    enWord: "Good",
    deWord: "Gut",
  },
  {
    enWord: "Thank you",
    deWord: "Danke",
  },
];

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardList: cardTestData,
    cardIsOpen: false,
    cardStartIndex: 0,
  },
  reducers: {
    openCardModal: (state) => {
      state.cardIsOpen = true;
    },
    increaseIndex: (state) => {
      state.cardStartIndex += 1;
    },
    decreaseIndex: (state) => {
      state.cardStartIndex -= 1;
    },
  },
});

export const { openCardModal, increaseIndex, decreaseIndex } =
  cardSlice.actions;
export default cardSlice.reducer;
