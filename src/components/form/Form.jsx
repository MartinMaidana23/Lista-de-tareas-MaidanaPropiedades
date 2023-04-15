import React from 'react'
import useForm from '../../hooks/useForm'
import Input from '../input/Input'

const Form = (props) => {

    const {initialForm} = props
    const {handleChange, handleSubmit, inputValue} = useForm(initialForm)

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center m-5'>
      {Object.entries(initialForm).map(([key], index)=>(
        <Input
          type={'text'}
          name={key}
          onChange={handleChange}
          key={index}
          value={inputValue}

        />
      ))}
        
        <button className='btn btn-primary'>Agregar Tarea</button>
    </form>
  )
}

export default Form