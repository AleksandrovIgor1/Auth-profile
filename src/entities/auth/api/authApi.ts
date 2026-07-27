import baseApi from "@/shared/api/baseApi";
import type { Auth } from "../model/types";
import { AuthResponseSchema, type AuthResponse } from "../model/schemas";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, Auth>({
      query: (auth) => ({
        url: "auth/login",
        method: "POST",
        body: auth,
      }),
      transformResponse: (response) => AuthResponseSchema.parse(response),
    }),
    register: build.mutation<AuthResponse, Auth>({
      query: (registration) => ({
        url: "auth/signUp",
        method: "POST",
        body: registration,
      }),
      transformResponse: (response) => AuthResponseSchema.parse(response),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "GET",
      }),
    }),
    refresh: build.query<AuthResponse, void>({
      query: () => ({
        url: "auth/refresh",
        method: "GET",
      }),
      transformResponse: (response) => AuthResponseSchema.parse(response),
    }),
    sendVerificationEmail: build.mutation<void, string | undefined>({
      query: (id) => ({
        url: `/auth/send-verification-email/${id}`,
        method: "GET",
      }),
    }),
    verifyEmail: build.mutation<void, string | undefined>({
      query: (token) => ({
        url: "auth/verify-email",
        method: "GET",
        params: {
          token,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useVerifyEmailMutation,
  useSendVerificationEmailMutation,
} = authApi;
