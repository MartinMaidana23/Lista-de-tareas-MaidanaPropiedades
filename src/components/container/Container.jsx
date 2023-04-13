import React, { useContext, useEffect, useState } from 'react'
import Form from '../form/Form'
import Card from '../card/Card'
import { TodoContext } from '../../context/TodoProvider'

const Container = () => {

    const initialForm = {
        tarea:"",
        comentario:"",
        id: Date.now(),
    }

    const {todos, deleteTarea} = useContext(TodoContext)

    return (
        
            <div className="App d-flex flex-column align-items-center">
            <h1>Lista de Tareas</h1>
            <Form
                initialForm={initialForm}
            />

            {
                todos.map(({tarea, comentario, id}, index)=>(
                    <Card key={index} tarea={tarea} comentario={comentario} onClick={()=> deleteTarea(id)} />
                ))
            }
            
        </div>
    )
}

export default Container