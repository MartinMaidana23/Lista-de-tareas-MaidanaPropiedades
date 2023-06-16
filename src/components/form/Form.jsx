import React, { useContext } from 'react'
import useForm from '../../hooks/useForm'
import Input from '../input/Input'
import {MdDoneOutline} from 'react-icons/md'
import {IoCloseSharp} from 'react-icons/io5'
import './form.css'

const Form = (props) => {

    const {initialForm, arrayPersonas, edit, person, id, handleEdit} = props
    const { handleChange, handleSubmit, form, handleUpdate } = useForm(
      initialForm,
      id,
      handleEdit
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

      <select name="persona" value={form.persona || person} onChange={handleChange}>
        <option value="">Selecciona un nombre</option>
        {arrayPersonas?.map((persona, index)=>(
           
          <option value={persona.value} key={index} >{persona.label} </option>
            
        ))}
      </select>

        { !edit
          ? 
          <button className='btn btn-primary'>Agregar Tarea</button>

          :

          <>
            <button className='btn btn-primary editBtn'><MdDoneOutline/></button>
            <button className='btn btn-primary editBtn' onClick={handleEdit}><IoCloseSharp/></button>
          </>
        }
    </form>
  )
}

export default Form