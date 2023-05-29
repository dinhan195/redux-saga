/** @format */

import axios from 'axios';

const URL = 'http://localhost:3000/todos/';
const todoApi = {
  getAllTodo: async (params) => {
    return await axios.get(URL, params);
  },
  addTodo: async (params) => {
    return await axios.post(URL, params);
  },
  deleteTodo: async (id) => {
    return await axios.delete(URL + id);
  },
  updateTodo: async (data) => {
    console.log(11, data);
    return await axios.put(`${URL}${data.id}`, data);
  },
};

export default todoApi;
