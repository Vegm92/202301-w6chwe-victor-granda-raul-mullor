import { configureStore } from "@reduxjs/toolkit";
import { robotsReducer } from "../features/robotsSlice";

export const store = configureStore({
  reducer: {
    robots: robotsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
