import axios from 'axios';

const API_URL = 'http://localhost:8000/';
// const API_URL = 'https://5d47-39-46-44-115.in.ngrok.io/';
const headers = {'Content-Type': 'application/json'}

export const login = (data) => {
  return axios.post(`${API_URL}login`,data)
    .then(response => response.data)
    .catch(response => response.response.data);
};

export const signup = (data) => {
  return axios.post(`${API_URL}register`, data)
    .then(response => response.data)
    .catch(response => response.data);
};

export const reset = (data) => {
    // var data = JSON.stringify(data)
    return axios.post(`${API_URL}reset`, data, headers)
      .then(response => response.data)
      .catch(error => error);
  };
  export const set_new_password = (data) => {
    return axios.post(`${API_URL}reset_password`, data)
      .then(response => response.data)
      .catch(error => console.error(error));
  };
  