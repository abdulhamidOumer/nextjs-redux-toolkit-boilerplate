import { mainStateReducer } from "./mainSlice";
import { ReducerTypes } from "./types";

const rootReducer: ReducerTypes = {
  mainState: mainStateReducer,
};

export default rootReducer;
