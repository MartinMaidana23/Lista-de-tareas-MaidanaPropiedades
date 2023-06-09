import React, {useContext, useState} from 'react'
import { TodoContext } from '../../context/TodoProvider'
import Card from '../card/Card'
import useCrud from '../../hooks/useCrud'
import './cardContainer.css'
import { filters } from './filters'
import useFilter from '../../hooks/useFilter'

const CardContainer = () => {
    const {todos} = useContext(TodoContext)
    const {handleFilter, filter} = useFilter()

  return (
    <div className='cardContainer'>

      <div className="filtros">
        {filters.map(({name, value}, index)=>(<button key={index} onClick={()=>handleFilter(value)} className={`${value} btn ${filter === value ? 'active' : ''} filter`}>{name}</button>))}
      </div>
        {
            todos && todos.filter(({persona})=> persona === filter || filter === 'all').map(({tarea, comentario, id, persona}, index)=>(
              <Card key={index} tarea={tarea} comentario={comentario}  persona={persona} id={id} />
          ))
            
        }
    </div>
  )
}

export default CardContainer