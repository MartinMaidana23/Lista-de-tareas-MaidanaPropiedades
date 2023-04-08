import { useState,} from 'react'
import { tareas } from '../tareas'

const useForm = (initalState) => {

  const [form, setForm] = useState(initalState)
  const [duties, setDuties] = useState(localStorage.getItem('tareas'));


    const handleChange = (e) =>{
        const {name, value} = e.target 
        setForm({
            ...form,
        [name]: value,
        })
        console.log(tareas)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        tareas.push(form)
        console.log(tareas);
        //setDuties(tareas)
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }

  return {
    form,
    handleChange,
    handleSubmit
  }
}

export default useForm