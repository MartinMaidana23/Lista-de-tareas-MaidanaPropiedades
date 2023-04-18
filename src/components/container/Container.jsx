import React, { useEffect } from 'react'
import Form from '../form/Form'
import useCrud from '../../hooks/useCrud'
import CardContainer from './CardContainer'
import './container.css'

const Container = () => {

    const {getAllTasks} = useCrud()

    const initialForm = {
        tarea:"",
        comentario:"",
    }

    const personas = [
        {label:'Martin', value:'martin'},
        {label:'Guadalupe', value:'guadalupe'},
        {label:'Jimena', value:'jimena'},
        {label:'Miguel', value:'miguel'},
    ]

   useEffect(() => {
     getAllTasks()
   }, [])
   
    

    return (
        
        <div className="App">
            <h1>Lista de Tareas</h1>
            <Form
                initialForm={initialForm}
                arrayPersonas={personas}
            />
            <CardContainer/>
            
            
        </div>
    )
}

export default Container