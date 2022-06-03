import { takeLatest, delay } from "redux-saga/effects";
import { mainStateActions } from ".";

function* setIsLoadingSaga() {
  yield delay(3000);
  yield mainStateActions.setLoading(false);
}

export default function* mainStateSaga() {
  yield takeLatest(mainStateActions.mimickLoading.type, setIsLoadingSaga);
}
