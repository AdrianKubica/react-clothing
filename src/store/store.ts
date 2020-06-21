import logger from "redux-logger"
import rootReducer from "./root.reducer"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { persistStore } from "redux-persist"

const middlewares = [logger]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export const persistor = persistStore(store)
