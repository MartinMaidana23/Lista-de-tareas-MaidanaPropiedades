import axios from "axios"

export const axiosClient = axios.create({
    baseURL: 'https://6438254bf3a0c40814abf5f2.mockapi.io/tareas'
})