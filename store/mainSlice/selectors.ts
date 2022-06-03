import { createSelector } from "@reduxjs/toolkit";
import { initialMainState } from ".";
import { RootState } from "../types";

const selectMain = (state: RootState) => state.mainState || initialMainState;

export const selectMainState = createSelector([selectMain], (state) => state);
