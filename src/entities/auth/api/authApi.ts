import baseApi from "@/shared/api/baseApi";
import type { Auth, AuthResponse } from "../model/types";
import { logout, setAccessToken, setInitialized } from "../model/authSlice";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, Auth>({
      query: (auth) => ({
        url: "auth/login",
        method: "POST",
        body: auth,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAccessToken(data.access_token));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    register: build.mutation<AuthResponse, Auth>({
      query: (registration) => ({
        url: "auth/signUp",
        method: "POST",
        body: registration,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAccessToken(data.access_token));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    logout: build.query<void, void>({
      query: () => "auth/logout",
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;

          dispatch(logout());
          dispatch(baseApi.util.resetApiState());
        } catch (error) {
          console.error(error);
        }
      },
    }),

    refresh: build.query<AuthResponse, void>({
      query: () => "auth/refresh",
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAccessToken(data.access_token));
        } catch {
          dispatch(logout());
        } finally {
          dispatch(setInitialized(true));
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyLogoutQuery,
  useRefreshQuery,
} = authApi;
