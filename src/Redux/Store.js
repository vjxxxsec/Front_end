import { createStore , applyMiddleware } from "redux";
import rootReducer from "./Rootreducer";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))


export default store
