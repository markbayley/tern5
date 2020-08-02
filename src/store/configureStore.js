import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducer";
import { rootSaga } from "./middleware/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// export default (prelooadedState = rootReducer()) => { ... }
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  // preloadedState,
});
sagaMiddleware.run(rootSaga);
