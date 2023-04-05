import axios from 'axios';

const axiosI = axios.create({
  baseURL: 'http://localhost:5173'
});

const axiosBasic = axios.create({
  baseURL: 'https://'
});

export { axiosI, axiosBasic };
