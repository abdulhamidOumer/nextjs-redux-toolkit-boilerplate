import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { MainState } from "./mainSlice/types";

export interface RootState {
  mainState: MainState;
}

type RequiredRootState = Required<RootState>;

export type RootStateKeyType = keyof RootState;

export type ReducerTypes = {
  [P in RootStateKeyType]?: Reducer<RequiredRootState[P], AnyAction>;
};
