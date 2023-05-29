/** @format */

import { all } from 'redux-saga/effects';
import {
  watchAddUserSaga,
  watchDeleteUserSaga,
  watchGetUerSaga,
} from '../features/Practice-4/userSlice';
import {
  watchAddTodoSaga,
  watchDeleteTodoSaga,
  watchGetTodoSaga,
  watchUpdateTodoSaga,
} from '../features/Exercise-2/todoSlice';

export default function* rootSaga() {
  yield all([
    watchGetUerSaga(),
    watchAddUserSaga(),
    watchDeleteUserSaga(),
    watchGetTodoSaga(),
    watchAddTodoSaga(),
    watchDeleteTodoSaga(),
    watchUpdateTodoSaga(),
  ]);
}
