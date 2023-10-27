import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from "./features/card-slice";

export const store = configureStore({
  reducer: {
    card: cardSliceReducer,
  },
});

export default store;
