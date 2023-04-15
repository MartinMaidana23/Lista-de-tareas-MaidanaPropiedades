import React from 'react'
import {ImCheckboxChecked} from 'react-icons/im'

const Card = (props) => {
    const {tarea, comentario, onClick, id, persona} = props

    const nombres = {
      guadi: 'primary-subtle',
      jime: 'warning',
      martin:'success',
      miguel:'danger'
    }

      
    const handleDelete = (id) =>{
        onClick(id)
    }
  return (
    <div className={`card w-75  bg-${nombres[persona]} m-2 p-2 `}>
        <div className="card-body">
            <h5 className="card-title text-white">{tarea}</h5>
            <p className="card-text">{comentario}</p>
            <button className="btn btn-outline-light d-flex align-items-center p-2"  onClick={()=>handleDelete(id)}> Marcar como hecho <ImCheckboxChecked/> </button>
        </div>
    </div>
  )
}

export default Card