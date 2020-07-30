import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./redux";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// export default (prelooadedState = rootReducer()) => { ... }
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  // preloadedState,
});
console.log("Firing SAGA middleware stated!");
sagaMiddleware.run(rootSaga);
