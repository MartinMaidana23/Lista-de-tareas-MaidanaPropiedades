import React, { useContext, useEffect, useState } from 'react'
import Form from '../form/Form'
import Card from '../card/Card'
import useForm from '../../hooks/useForm'
import { tareas } from '../../tareas'
import Provider, { LocalContext } from '../../context/Provider'

const Container = () => {

    const initalForm = {
        tarea:'',
        comentario:'',
        id:''
    }

    const {handleChange,handleSubmit, todos} = useForm(initalForm)


    return (
        <div className="App d-flex flex-column align-items-center">
        <h1>Lista de Tareas</h1>
        <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />

        {
            todos.map((tarea, index)=>(
                <Card key={index} {...tarea}/>
            ))
        }
        
    </div>
    )
}

export default Container