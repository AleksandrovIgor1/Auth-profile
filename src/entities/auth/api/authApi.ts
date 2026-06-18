import baseApi from "@/shared/api/baseApi";
import type { Auth, AuthResponse } from "../model/types";
import { removeFromLS, setToLS } from "@/shared/lib/localStorage";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, Auth>({
      query: (auth) => ({
        url: "auth/login",
        method: "POST",
        body: auth,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          setToLS("access_token", result.data.access_token);
          window.location.href = "/";
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
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          setToLS("access_token", result.data.access_token);
          window.location.href = "/";
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
          removeFromLS("access_token");
          dispatch(baseApi.util.resetApiState());
          window.location.href = "/login";
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLazyLogoutQuery } =
  authApi;
