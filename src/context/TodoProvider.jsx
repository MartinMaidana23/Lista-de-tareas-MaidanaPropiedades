import React, { createContext, useState, useEffect} from 'react'

export const TodoContext = createContext()

const TodoProvider = ({children}) => {

  const [todos, setTodos] = useState([])
  



  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      
      
    }}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider