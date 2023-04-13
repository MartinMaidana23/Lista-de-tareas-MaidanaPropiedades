import React, { createContext, useState, useEffect} from 'react'

export const TodoContext = createContext()

const TodoProvider = ({children}) => {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('tareas') || []))

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'))
    setTodos(tareasGuardadas)
  }, [])

  useEffect(()=>{
      localStorage.setItem('tareas', JSON.stringify(todos))
  },[todos])

  const deleteTarea = (id) =>{
    const filtrado = todos.filter((todo)=>todo.id!==id)
    localStorage.setItem('tareas', JSON.stringify(filtrado))
    setTodos(filtrado)
    location.reload()
}

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      deleteTarea
      
    }}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider