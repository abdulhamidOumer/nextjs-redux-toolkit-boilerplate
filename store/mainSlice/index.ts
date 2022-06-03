import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../types";
import { MainState } from "./types";

export const initialMainState: MainState = {
  isLoading: false,
};

const slice = createSlice({
  name: "main",
  initialState: initialMainState,
  reducers: {
    mimickLoading(state) {
      state.isLoading = true;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<RootState>) => {
      return {
        ...state,
        ...action.payload.mainState,
      };
    },
  },
});

export const {
  actions: mainStateActions,
  reducer: mainStateReducer,
  name: mainStateName,
} = slice;

export default slice;
