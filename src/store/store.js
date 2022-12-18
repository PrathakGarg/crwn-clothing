import { compose, createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import { persistedRootReducer } from "./root-reducer";

const middlewares = [
  process.env.NODE_ENV === "development" && logger,
].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedRootReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
