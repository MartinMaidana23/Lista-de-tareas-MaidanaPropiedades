import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm'

const Form = () => {

    const initalForm = {
        tarea:'',
        comentario:''
    }
    const {handleChange,handleSubmit} = useForm(initalForm)

    
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='tarea' onChange={handleChange} />
        <input type="text" name='comentario' onChange={handleChange} />
        <button className='btn btn-primary'>Agregar Tarea</button>
    </form>
  )
}

export default Form