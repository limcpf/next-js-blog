import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
	name: "pagination",
	initialState: {
		page: 1,
		recentPost: 0,
	},
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload;
		},
		setRecentPost: (state, action) => {
			state.recentPost = action.payload;
		},
	},
});

export const { setPage, setRecentPost } = pageSlice.actions;

export default pageSlice.reducer;
