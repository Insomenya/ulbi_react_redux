import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    count: 0
};

const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {
        countSet(state, action) {
            state.count = action.payload;
        }
    }
});

export const { countSet } = repoSlice.actions;
export default repoSlice.reducer;