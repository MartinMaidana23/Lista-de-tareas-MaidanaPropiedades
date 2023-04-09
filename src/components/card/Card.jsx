import React from 'react'
import {ImCheckboxChecked} from 'react-icons/im'

const Card = (props) => {
    const {tarea, comentario, onClick, id} = props
    const handleDelete = (id) =>{
        onClick(id)
    }
  return (
    <div className="card w-75 mb-3">
        <div className="card-body">
            <h5 className="card-title">{tarea}</h5>
            <p className="card-text">{comentario}</p>
            <button className="btn btn-primary" onClick={()=>handleDelete(id)}><ImCheckboxChecked/></button>
        </div>
    </div>
  )
}

export default Card