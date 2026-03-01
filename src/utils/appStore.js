import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        movies: moviesReducer,
        gpt: gptReducer
    },
    // Enable Redux DevTools explicitly
    devTools: process.env.NODE_ENV !== 'production'
});

export default appStore;