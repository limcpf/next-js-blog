import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./store/counter";
import pageReducer from "./store/pagination";

const store = configureStore({
	reducer: { counter: counterReducer, pagination: pageReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;