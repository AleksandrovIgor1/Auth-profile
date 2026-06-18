import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
import { getFromLS, removeFromLS, setToLS } from "../lib/localStorage";
import type { RefreshResponse } from "./types";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = getFromLS("access_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshResult = await baseQuery("auth/refresh", api, extraOptions);
    if (refreshResult.data) {
      const data = refreshResult.data as RefreshResponse;
      setToLS("access_token", data.access_token);
      result = await baseQuery(args, api, extraOptions);
    } else {
      removeFromLS("access_token");
      api.dispatch(baseApi.util.resetApiState());
      window.location.replace("/login");
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
