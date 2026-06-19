import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string | null;
  initialized: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  initialized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      state.initialized = true;
    },
    logout(state) {
      state.accessToken = null;
      state.initialized = false;
    },
    setInitialized(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
  },
});

export const { setAccessToken, logout, setInitialized } = authSlice.actions;
export default authSlice.reducer;
