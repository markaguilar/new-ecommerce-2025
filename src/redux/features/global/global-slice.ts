import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

type InitialState = {
  isSignInSignUpModalVisible: boolean;
  isSignInFormVisible: boolean;
};

const initialState: InitialState = {
  isSignInSignUpModalVisible: false,
  isSignInFormVisible: true,
};

export const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    signInSignUpModalVisible: (state, action: PayloadAction<string>) => {
      state.isSignInSignUpModalVisible = !state.isSignInSignUpModalVisible;
    },
    setSignInformVisible: (state) => {
      state.isSignInFormVisible = !state.isSignInFormVisible;
    },
  },
});

export const { signInSignUpModalVisible, setSignInformVisible } =
  global.actions;

export const selectSignInSignUpModal = (state: RootState) =>
  state.globalReducer.isSignInSignUpModalVisible;
export const selectSignInFormVisible = (state: RootState) =>
  state.globalReducer.isSignInFormVisible;

export default global.reducer;
