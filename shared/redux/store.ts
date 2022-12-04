import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./store/counter";
export default configureStore({
	reducer: { counter: counterReducer },
});
