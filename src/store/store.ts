import logger from "redux-logger"
import rootReducer from "./root.reducer"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

const middlewares = [logger]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
