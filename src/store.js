import { createStore,combineReducers,applyMiddleware } from 'redux';
import logger from "redux-logger";

import { authApp } from './reducer/authred';
import { regesterApp } from './reducer/reg';



export const StoreApp = createStore(combineReducers({user: authApp,reg: regesterApp}),{},applyMiddleware(logger));
