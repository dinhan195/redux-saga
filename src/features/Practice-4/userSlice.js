/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import userApi from '../../API/userApi';
import {
  addUserSagaAction,
  deleteUserSagaAction,
  getUserSagaAction,
} from './userActions';

const initialState = {
  users: [],
};
// fetch get users
function* getUserSaga(action) {
  const res = yield call(() => userApi.getAll(action.payload));
  yield put(getUser(res.data));
}
export function* watchGetUerSaga() {
  yield takeLatest(getUserSagaAction, getUserSaga);
}

// Add new user
function* addUserSaga(action) {
  const res = yield call(() => userApi.addUser(action.payload));
  yield put(addUser(res.data));
}
export function* watchAddUserSaga() {
  yield takeLatest(addUserSagaAction, addUserSaga);
}

//Dellete user
function* deleteUserSaga(action) {
  const res = yield call(() => userApi.deleteUserId(action.payload));
  yield put(deleteUser(res.data));
  yield put(getUserSagaAction());
}
export function* watchDeleteUserSaga() {
  yield takeLatest(deleteUserSagaAction, deleteUserSaga);
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      console.log('Respone then delete', action.payload);
    },
  },
});

export const { getUser, addUser, deleteUser } = userSlice.actions;
export const selectUser = (state) => state.users.users;
export default userSlice.reducer;
