/** @format */

import React, { useEffect, useState } from 'react';
import { Button, Card, Form, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoSagaAction,
  deleteTodoSagaAction,
  getTodoSagaAction,
  updateTodoSagaAction,
} from './todoActions';

const TodoList = () => {
  const [input, setInput] = useState({ id: 1, title: '' });
  const [statusButton, setStatusButton] = useState(true);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(getTodoSagaAction());
  }, [dispatch]);

  const onChange = (e) => {
    const { value } = e.target;
    setInput({ ...input, title: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (statusButton === true) {
      console.log(123, input);
      const todoId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      dispatch(addTodoSagaAction({ ...input, id: todoId }));
    } else {
      dispatch(updateTodoSagaAction(input));

      setStatusButton(true);
    }
    setInput({ id: 1, title: '' });
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoSagaAction(id));
  };
  const handleUpdateTodo = (todo) => {
    setStatusButton(false);

    setInput(todo);
  };

  return (
    <Card className="p-4 m-auto mt-3" style={{ width: 450 }}>
      <Row as="form" onSubmit={onSubmit}>
        <Form.Control
          type="text"
          placeholder="Input new todo ..."
          value={input.title}
          onChange={onChange}
        />
        <Button className="my-3" type="submit">
          {statusButton === true ? 'Add todo' : 'Update todo'}
        </Button>
      </Row>
      <h2>Todo list</h2>
      <ListGroup>
        {todos &&
          todos.map((todo) => {
            return (
              <ListGroup.Item
                className="d-flex justify-content-between"
                key={todo.id}>
                <span className="fs-5">{todo.title}</span>
                <div>
                  <Button
                    variant="outline-secondary me-2"
                    className="p-1"
                    onClick={() => handleUpdateTodo(todo)}>
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    className="p-1"
                    onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Card>
  );
};

export default TodoList;
