import { configureStore, Store } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import rootSaga from "./saga";
import { RootState } from "./types";

const configureAppStore = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({ thunk: false }),
      sagaMiddleWare,
    ],
  });

  sagaMiddleWare.run(rootSaga);
  return store;
};

type AppStore = ReturnType<typeof configureAppStore>;

export const reduxWrapper = createWrapper<AppStore>(configureAppStore, {
  debug: true,
});

export default configureAppStore;
