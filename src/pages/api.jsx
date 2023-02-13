import axios from 'axios';

const API_URL = 'http://localhost:8000/';
// const API_URL = 'https://44f4-39-46-44-115.in.ngrok.io/';
// const API_URL = 'https://0212-39-46-44-115.in.ngrok.io/';
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

  export const fetchteams = () => {
    return axios.get(`${API_URL}teams`,headers)
      .then(response => response.data)
      .catch(response => response.response.data);
  };
  export const addMember = (data) => {
    // debugger;
    return axios.post(`${API_URL}add_member`, data)
      .then(response => response.data)
      .catch(response => response.response.data);
  };
  
  export const deletememeber = (data) => {
    return axios.post(`${API_URL}delete`, data)
      .then(response => response.data)
      .catch(error => console.error(error));
  };
  