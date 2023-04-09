import { useContext, useEffect, useState,} from 'react'
import { tareas } from '../tareas'
import { LocalContext } from '../context/Provider'

const useForm = (initalState) => {

    const [form, setForm] = useState(initalState)
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('tareas')) || [])

    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'))
        setTodos(tareasGuardadas)
    }, [])
    
    useEffect(()=>{
        localStorage.setItem('tareas', JSON.stringify(todos))
    },[todos])


    
    const handleChange = (e) =>{
        const {name, value} = e.target 
        setForm({
            ...form,
            [name]: value,
        })
        
    }

    const deleteTarea = (id) =>{
        const filtrado = todos.filter((todo)=>todo.id!==id)
        console.log(filtrado);
        setTodos(filtrado)
    }

    
    const handleSubmit = (e)=>{
        e.preventDefault()
        tareas.push(form)
        setTodos(tareas)
    }
    
    

  return {
    form,
    handleChange,
    handleSubmit,
    todos,
    setTodos,
    deleteTarea
    
  }
}

export default useForm