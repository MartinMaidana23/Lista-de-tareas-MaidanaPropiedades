import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm'

const Form = (props) => {
    const {handleChange, handleSubmit} = props

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center m-5'>
        <input type="text" name='tarea' onChange={handleChange} />
        <input type="text" name='comentario' onChange={handleChange}/>
        <button className='btn btn-primary'>Agregar Tarea</button>
    </form>
  )
}

export default Form