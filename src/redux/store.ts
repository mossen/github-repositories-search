import { configureStore, getDefaultMiddleware, Store } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import reducers from "./rootReducer";
import Saga from "./saga";

const devMode = process.env.NODE_ENV === "development";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export default (preloadedState = {}): Store => {
  const store = configureStore({
    reducer: reducers,
    devTools: devMode,
    middleware,
    preloadedState
  });

  sagaMiddleware.run(Saga);

  return store;
};
