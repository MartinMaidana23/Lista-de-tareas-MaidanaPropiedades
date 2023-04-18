import React from 'react'
import useForm from '../../hooks/useForm'
import Input from '../input/Input'
import './form.css'

const Form = (props) => {

    const {initialForm, arrayPersonas} = props
    const {handleChange, handleSubmit, form} = useForm({
      ...initialForm,
      persona:''
    })

  return (
    <form onSubmit={handleSubmit} >
      {Object.entries(initialForm).map(([key], index)=>(
        <Input
        type={'text'}
        name={key}
        onChange={handleChange}
        key={index}
        />
      ))}

      <select name="persona" value={form.persona} onChange={handleChange}>
        <option value="">Selecciona un nombre</option>
        {arrayPersonas?.map((persona, index)=>(
            <option value={persona.value}  key={index} >{persona.label}  </option>
        ))}
      </select>

        <button className='btn btn-primary'>Agregar Tarea</button>
    </form>
  )
}

export default Form