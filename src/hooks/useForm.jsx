import {useEffect, useState,} from 'react'
import { tareas } from '../tareas'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoProvider'

const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm)

    const {todos, setTodos} = useContext(TodoContext)

    
    const handleChange = (e) =>{
        const {name, value} = e.target 
        setForm({
            ...form,
            [name]: value,
        })
        console.log(form);

        
    }

    
    const handleSubmit = (e)=>{
        e.preventDefault()
        tareas.push(form)
        setTodos(tareas)
        location.reload()
    }
    
    

  return {
    form,
    handleChange,
    handleSubmit
  }
}

export default useForm