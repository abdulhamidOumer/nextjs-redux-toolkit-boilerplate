// import { Store } from "@reduxjs/toolkit";
// import configureAppStore from "./configureStore";
// import { ReducerTypes } from "./types";

// let store: Store | undefined = undefined;
// const initialiseStore = (preloadedState: ReducerTypes) => {
//   let _store = store ?? configureAppStore(preloadedState);

//   if (preloadedState && store) {
//     _store = configureAppStore({ ...store.getState(), ...preloadedState });
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === "undefined") return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };

// export default initialiseStore;

export default {};
