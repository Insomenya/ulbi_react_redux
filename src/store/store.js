import { configureStore } from "@reduxjs/toolkit";
import repoReducer from './repoSlice';
import { repoApi } from "../services/repoService";

export const store = configureStore({
    reducer: {
        repo: repoReducer,
        [repoApi.reducerPath]: repoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(repoApi.middleware),
});