import { useState,} from 'react'
import { tareas } from '../tareas'

const useForm = (initalState) => {

  const [form, setForm] = useState(initalState)


    const handleChange = (e) =>{
        const {name, value} = e.target 
        setForm({
            ...form,
        [name]: value,
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(tareas);
        tareas.push(form)
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }

  return {
    form,
    handleChange,
    handleSubmit
  }
}

export default useForm