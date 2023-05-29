/** @format */

import { createBrowserRouter } from 'react-router-dom';
import UserManager from './features/Practice-4/UserManager';
import TodoList from './features/Exercise-2/TodoList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserManager />,
  },
  {
    path: '/exercise-2',
    element: <TodoList />,
  },
]);

export default router;
