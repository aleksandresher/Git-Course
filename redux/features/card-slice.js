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
    language: "english",
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
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { openCardModal, increaseIndex, decreaseIndex, changeLanguage } =
  cardSlice.actions;
export default cardSlice.reducer;
