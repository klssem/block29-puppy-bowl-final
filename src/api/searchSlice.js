// searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
    },
    reducers: {
        setPlayerSearchQuery: (state, action) => {
            state.query = action.payload;
        },
    },
});

export const { setPlayerSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;