import type { AuthResponse } from "@/entities/auth";
import {
  logout,
  setAccessToken,
  type AuthState,
} from "@/entities/auth/model/authSlice";
import type { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as { auth: AuthState }).auth.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  const url = typeof args === "string" ? args : args.url;

  if (
    result.error?.status === 401 &&
    !["auth/login", "auth/signUp", "auth/refresh"].includes(url)
  ) {
    const refreshResult = await baseQuery(
      { url: "auth/refresh" },
      api,
      extraOptions,
    );

    const refreshData = refreshResult.data as AuthResponse | undefined;
    if (refreshData?.access_token) {
      api.dispatch(setAccessToken(refreshData.access_token));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ["Profile"],
});
export default baseApi;
