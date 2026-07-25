import { authApi } from "@/entities/auth/api/authApi";
import { store } from "../providers/store/appStore";
import {
  setAccessToken,
  setAuthChecked,
} from "@/entities/auth/model/authSlice";

export const initApp = async () => {
  try {
    const response = await store
      .dispatch(authApi.endpoints.refresh.initiate())
      .unwrap();

    store.dispatch(setAccessToken(response.access_token));
  } catch {
    //
  } finally {
    store.dispatch(setAuthChecked(true));
  }
};
