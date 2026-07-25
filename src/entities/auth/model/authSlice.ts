import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string | null;
  authChecked: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  authChecked: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setAuthChecked(state, action: PayloadAction<boolean>) {
      state.authChecked = action.payload;
    },
    logout(state) {
      state.accessToken = null;
      state.authChecked = true;
    },
  },
});

export const { setAccessToken, setAuthChecked, logout } = authSlice.actions;
export default authSlice.reducer;
