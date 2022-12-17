import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./store/pagination";

const store = configureStore({
	reducer: { pagination: pageReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
