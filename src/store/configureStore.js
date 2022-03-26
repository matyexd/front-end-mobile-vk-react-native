import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas';
import {initialReducer} from './reducers/initalReducers';

const rootReducers = combineReducers({initialReducer});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
