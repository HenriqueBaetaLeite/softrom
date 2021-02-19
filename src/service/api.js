import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://54.209.213.172/api/v1/public',
  headers: {
    'Content-Type': 'application/json',
  },
});
