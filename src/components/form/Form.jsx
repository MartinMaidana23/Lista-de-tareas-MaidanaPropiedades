import React, { useContext } from 'react'
import useForm from '../../hooks/useForm'
import Input from '../input/Input'
import {MdDoneOutline} from 'react-icons/md'
import './form.css'
import { TodoContext } from '../../context/TodoProvider'

const Form = (props) => {

    const {initialForm, arrayPersonas, edit, task, comment, person, id} = props
    const { handleChange, handleSubmit, form, handleUpdate } = useForm(
      initialForm,
      edit,
      id
    );
  
    
  return (
    <form onSubmit={!edit ? handleSubmit : handleUpdate} >
      <div className="input-group">
      {edit && Object.entries(initialForm).map(([key, values], index)=>(
          <Input
          type={'text'}
          name={key}
          placeholder={values}
          onChange={handleChange}
          key={index}
          />
        ))}
        {!edit && Object.entries(initialForm).map(([key], index)=>(
          <Input
          type={'text'}
          name={key}
          placeholder={key}
          onChange={handleChange}
          key={index}
          />
        ))}
      </div>

      <select name="persona" value={form.persona} onChange={handleChange}>
        <option value="">Selecciona un nombre</option>
        {arrayPersonas?.map((persona, index)=>(
           
          <option value={persona.value} key={index} >{persona.label} </option>
            
        ))}
      </select>

        { !edit
         ? 
         <button className='btn btn-primary'>Agregar Tarea</button>
         :
         <button className='btn btn-primary'><MdDoneOutline/></button> }
    </form>
  )
}

export default Form