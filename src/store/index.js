import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

export default createStore(combineReducers(reducers), applyMiddleware(
    createLogger(),
    promiseMiddleware,
));
