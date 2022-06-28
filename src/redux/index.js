import appReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";

import { configureStore } from "@reduxjs/toolkit";
import { watcherSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: appReducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(watcherSaga);

export default store;