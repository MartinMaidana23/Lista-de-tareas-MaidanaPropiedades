import React, { useContext, useEffect, useState } from 'react'
import Form from '../form/Form'
import Card from '../card/Card'
import useForm from '../../hooks/useForm'
import { tareas } from '../../tareas'
import Provider, { LocalContext } from '../../context/Provider'

const Container = () => {

    const initialForm = {
        tarea:"",
        comentario:"",
        id: Date.now(),
    }

    const {handleChange,handleSubmit, todos,setTodos, deleteTarea} = useForm(initialForm)

    
    

    return (
        <div className="App d-flex flex-column align-items-center">
        <h1>Lista de Tareas</h1>
        <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
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