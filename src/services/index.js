import axios from "axios"

export const api = axios.create(
  {
    baseURL: 'https://fcnyrg-3333.csb.app',
    withCredentials: true,
  }
)