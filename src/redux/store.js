import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from './root-reducer';
const logger = createLogger();
export const store = createStore(rootReducer, applyMiddleware(logger));
