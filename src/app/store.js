/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/Practice-4/userSlice';
import rootSaga from './saga';
import todoReducer from '../features/Exercise-2/todoSlice';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
  todos: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
