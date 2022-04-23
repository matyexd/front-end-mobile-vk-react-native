import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas';
import {rootReducers} from './reducers';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);
