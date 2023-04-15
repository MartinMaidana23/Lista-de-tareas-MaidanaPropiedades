import axios from "axios"

export const axiosClient = axios.create({
    baseURL: 'https://6431fd7f3e05ff8b371eed12.mockapi.io/tareas'
})