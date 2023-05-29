/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addUserSagaAction,
  deleteUserSagaAction,
  getUserSagaAction,
} from './userActions';
import { selectUser } from './userSlice';

const UserManager = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserSagaAction());
  }, [dispatch]);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = users[users.length - 1].id + 1 || 1;
    dispatch(addUserSagaAction({ id: userId, name: input }));
    setInput('');
  };
  const handleDeleteUser = (id) => {
    dispatch(deleteUserSagaAction(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New user.."
          value={input}
          onChange={onChange}
        />
        <button type="submit">Add user</button>
      </form>
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li key={user.id}>
                <span>{user.name}</span>
                <button onClick={() => handleDeleteUser(user.id)}>
                  delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default UserManager;
