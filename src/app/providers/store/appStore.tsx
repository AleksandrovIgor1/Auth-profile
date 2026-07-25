import authReducer from "@/entities/auth/model/authSlice";
import baseApi from "@/shared/api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "./listenerMiddleware";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(baseApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;