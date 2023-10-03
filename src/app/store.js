import { configureStore } from "@reduxjs/toolkit";
import { moviesListReducer } from "../features/moviesListSlice";

export const store = configureStore({
  reducer: moviesListReducer,
});
