import React from 'react'

const Card = (props) => {
    const {tarea, comentario} = props
  return (
    <div className="card w-75 mb-3">
        <div className="card-body">
            <h5 className="card-title">{tarea}</h5>
            <p className="card-text">{comentario}</p>
            <button className="btn btn-primary">Marcar como hecho</button>
        </div>
    </div>
  )
}

export default Card