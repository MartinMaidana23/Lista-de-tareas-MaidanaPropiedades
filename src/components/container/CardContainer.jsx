import React, {useContext} from 'react'
import { TodoContext } from '../../context/TodoProvider'
import Card from '../card/Card'
import useCrud from '../../hooks/useCrud'

const CardContainer = () => {
    const {todos} = useContext(TodoContext)
    const {deleteTask} = useCrud()

  return (
    <div className='d-flex justify-content-center'>
        {
            todos && todos.map(({tarea, comentario, id, persona}, index)=>(
                <Card key={index} tarea={tarea} comentario={comentario} onClick={()=> deleteTask(id)} persona={persona} />
            ))
        }
    </div>
  )
}

export default CardContainer