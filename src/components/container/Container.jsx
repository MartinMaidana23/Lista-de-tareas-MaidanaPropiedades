import React, { useEffect } from 'react'
import Form from '../form/Form'
import useCrud from '../../hooks/useCrud'
import CardContainer from './CardContainer'

const Container = () => {

    const {getAllTasks} = useCrud()

    const initialForm = {
        tarea:"",
        comentario:"",
        persona:['martin','guadi','jime','guadi']
    }

   useEffect(() => {
     getAllTasks()
   }, [])
   
    

    return (
        
            <div className="App d-flex flex-column align-items-center">
            <h1>Lista de Tareas</h1>
            <Form
                initialForm={initialForm}
            />
            <CardContainer/>
            
            
        </div>
    )
}

export default Container