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
            
            const todo = todos.find(todo => todo.id === id)

            const editedTodo = {
                id: todo.id,
                agente: todo.agente,
                tarea: editedObj.tarea,
                comentario: editedObj.comentario,
                persona: editedObj.persona
            }
            await axiosClient.put(`/${id}`, editedTodo)
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