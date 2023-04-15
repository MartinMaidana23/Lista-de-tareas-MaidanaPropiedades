import {useState} from 'react'
import useCrud from './useCrud'

const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm)
    const [inputValue, setInputValue] = useState()
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
        setInputValue('')
        setForm(initialForm)
        setInputValue(undefined)
    }
    
    

  return {
    form,
    handleChange,
    handleSubmit,
    inputValue
  }
}

export default useForm