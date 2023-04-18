import {useState} from 'react'
import useCrud from './useCrud'

const useForm = (initialForm) => {
    const [form, setForm] = useState({
      ...initialForm,
      persona:''
    })
    const {postTask} = useCrud()

    const handleChange = (e) =>{
        const {name, value} = e.target 
        setForm({
          ...form,
          [name]: value,
      })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        await postTask(form)
        console.log(form);
        setForm({
          ...initialForm,
          persona:''
        })
        e.target.reset()
    }
    
    

  return {
    form,
    handleChange,
    handleSubmit,
  }
}

export default useForm