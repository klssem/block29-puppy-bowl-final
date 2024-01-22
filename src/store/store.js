import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../api/puppyBowlApi";
import searchReducer from "../api/searchSlice";

const store = configureStore ({
    reducer: { 
        [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
        search: searchReducer,
    },
    middleware: ( getDefaultMiddleware) => 
        getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

export default store;