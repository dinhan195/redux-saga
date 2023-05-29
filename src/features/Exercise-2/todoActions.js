/** @format */

import { createAction } from '@reduxjs/toolkit';

export const getTodoSagaAction = createAction('todo/getTodoSaga');
export const addTodoSagaAction = createAction('todo/addTodoSaga');
export const deleteTodoSagaAction = createAction('todo/deleteTodoSaga');
export const updateTodoSagaAction = createAction('todo/updateTodoSaga');
