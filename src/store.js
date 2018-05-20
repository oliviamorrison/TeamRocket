import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();

const logger = createLogger();

const INITIAL_STATE = {};


const middleware = [
    thunkMiddleware,
    routerMiddleware(history),
    logger
];

const composedEnhancers =  compose(
    applyMiddleware(...middleware));

const store = createStore(
    rootReducer(),
    INITIAL_STATE,
    composedEnhancers
);

export default store;
