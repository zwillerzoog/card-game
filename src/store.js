import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducers from './reducers';

export const store = createStore(reducers, applyMiddleware(promise(), thunk, logger));