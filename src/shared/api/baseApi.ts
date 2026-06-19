import type { AuthResponse } from "@/entities/auth";
import {
  logout,
  setAccessToken,
  type AuthState,
} from "@/entities/auth/model/authSlice";
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

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  const isRefreshRequest = typeof args === "string" && args === "auth/refresh";

  if (result.error?.status === 401 && !isRefreshRequest) {
    const refreshResult = await baseQuery("auth/refresh", api, extraOptions);
    if (refreshResult.data) {
      api.dispatch(
        setAccessToken((refreshResult.data as AuthResponse).access_token),
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
      api.dispatch(baseApi.util.resetApiState());
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
