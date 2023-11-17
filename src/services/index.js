import axios from "axios"

export const api = axios.create(
  {
    baseURL: 'https://foodexplorer-api-aflp.onrender.com',
    withCredentials: true,
  }
)