import React, {useContext} from 'react'
import { axiosClient } from '../axios/axios'
import { TodoContext } from '../context/TodoProvider'

const useCrud = () => {
    const {todos, setTodos} = useContext(TodoContext)

    const getAllTasks = async () => {
        try {
            const response = await axiosClient.get()
            setTodos(response.data)

        } catch (error) {
            console.log(error);
        }
    }

    const postTask = async (obj) => {
        try {
            await axiosClient.post('/',obj)
            getAllTasks()
            
        } catch (error) {
            console.log(error);
        }
    }

    const editTask =  async (id, editedObj) => {
        
        try {
            
            const index = todos.findIndex(todo => todo.id === id)
            console.log(todos);
            todos.splice(index, 1, editedObj)
            console.log(todos);
            await axiosClient.put(`/${id}`, todos).then(response => console.log(response))
            getAllTasks()
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async id => {
        try {
            await axiosClient.delete(id)
            getAllTasks()
        } catch (error) {
            console.log(error);
        }
    }

  return {
    getAllTasks,
    postTask,
    editTask,
    deleteTask,
  }
}

export default useCrud