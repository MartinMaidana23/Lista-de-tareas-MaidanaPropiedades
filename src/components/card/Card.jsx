import React from 'react'
import {ImCheckboxChecked} from 'react-icons/im'
import './card.css'

const Card = (props) => {
    const {tarea, comentario, onClick, id, persona} = props

    const nombres = {
      guadalupe: 'guadalupe',
      jimena: 'jimena',
      martin:'martin',
      miguel:'miguel'
    }

      
    const handleDelete = (id) =>{
        onClick(id)
    }
  return (
    <div className={`card ${nombres[persona]}`}>
        <h2 className="">{tarea}</h2>
        <p className="">{comentario}</p>
        {<button className="btn"  onClick={()=>handleDelete(id)}><ImCheckboxChecked/></button>}
    </div>
  )
}

export default Card