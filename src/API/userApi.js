/** @format */

import axios from 'axios';

const url = 'http://localhost:3000/users/';
const userApi = {
  getAll: async (params) => {
    return await axios.get(url, params);
  },
  getUserId: async (id) => {
    return await axios.get(url + id);
  },
  addUser: async (newUser) => {
    return await axios.post(url, newUser);
  },
  deleteUserId: async (id) => {
    return await axios.delete(url + id);
  },
};

export default userApi;
