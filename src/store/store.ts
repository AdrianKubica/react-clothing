import logger from "redux-logger"
import rootReducer from "./root.reducer"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import { fetchCollectionsStart } from './shop/shop.sagas';

const sagaMiddleware = createSagaMiddleware()

const middlewares: any[] = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store)
