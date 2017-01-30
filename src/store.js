import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

const middleware = applyMiddleware(promise(), thunk, logger());

export default store = createStore(reducer, middleware);

