import {useContext, useState} from 'react'
import useCrud from './useCrud'
import { TodoContext } from '../context/TodoProvider'

const useForm = (initialForm, edit,id,) => {
    const [form, setForm] = useState({
      ...initialForm,
      persona:''
    })

    const {postTask, editTask} = useCrud()

    const handleChange = (e) =>{
        const {name, value} = e.target 
        
        setForm({...form,[name]: value,})
        console.log(form);
          
    }
    const handleSubmit = async (e)=>{
        try {
          e.preventDefault()

          await postTask(form)
          setForm({
            ...initialForm,
            persona:''
          })
          e.target.reset()
        } catch (error) {
          console.log(error);
        }
    }

    const handleUpdate = async (e)=>{
      try {
        e.preventDefault()
        console.log('update');

        await editTask(id, form)
        setForm({
          ...initialForm,
          persona:''
        })
        e.target.reset()
      } catch (error) {
        console.log(error);
      }
    }
    
    

  return {
    form,
    handleChange,
    handleSubmit,
    handleUpdate
  }
}

export default useForm