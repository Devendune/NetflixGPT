import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
    reducer: {
        movies: moviesReducer
    },
    // Enable Redux DevTools explicitly
    devTools: process.env.NODE_ENV !== 'production'
});

export default appStore;