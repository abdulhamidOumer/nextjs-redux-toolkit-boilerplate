import { all } from "redux-saga/effects";
import mainStateSaga from "./mainSlice/saga";

function* rootSaga() {
  yield all([mainStateSaga()]);
}

export default rootSaga;
