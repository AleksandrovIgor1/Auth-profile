import { logout } from "@/entities/auth/model/authSlice";
import baseApi from "@/shared/api/baseApi";
import { createListenerMiddleware } from "@reduxjs/toolkit";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: logout,
  effect: async (_, api) => {
    api.dispatch(baseApi.util.resetApiState());
  },
});
