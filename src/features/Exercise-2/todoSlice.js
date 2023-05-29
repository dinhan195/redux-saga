/** @format */

import { createSlice } from '@reduxjs/toolkit';
import todoApi from './todoApi';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addTodoSagaAction,
  deleteTodoSagaAction,
  getTodoSagaAction,
  updateTodoSagaAction,
} from './todoActions';

//Get todo list

function* getTodoSaga(action) {
  const res = yield call(() => todoApi.getAllTodo(action.payload));
  yield put(getTodo(res.data));
}
export function* watchGetTodoSaga() {
  yield takeLatest(getTodoSagaAction, getTodoSaga);
}

// Add new todo

function* addTodoSaga(action) {
  const res = yield call(() => todoApi.addTodo(action.payload));
  yield put(addTodo(res.data));
}
export function* watchAddTodoSaga() {
  yield takeLatest(addTodoSagaAction, addTodoSaga);
}
const initialState = {
  todos: [],
};

// Delete todo
function* deleteTodoSaga(action) {
  const res = yield call(() => todoApi.deleteTodo(action.payload));
  yield put(deleteTodo(res.data));
  yield put(getTodoSagaAction());
}

export function* watchDeleteTodoSaga() {
  yield takeLatest(deleteTodoSagaAction, deleteTodoSaga);
}
// Update todo by id

function* updateTodoSaga(action) {
  console.log(action.payload);
  const res = yield call(() => todoApi.updateTodo(action.payload));
  yield put(updateTodo(res.data));
}
export function* watchUpdateTodoSaga() {
  yield takeLatest(updateTodoSagaAction, updateTodoSaga);
}
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodo: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      console.log('Deleted to id', action.payload.id);
    },
    updateTodo: (state, action) => {
      console.log(action.payload);
      const update = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return (todo = action.payload);
        }
        return todo;
      });
      state.todos = update;
    },
  },
});

export const { getTodo, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
