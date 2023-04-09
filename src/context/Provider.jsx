import React, { createContext} from 'react'

export const LocalContext = createContext()

const Provider = ({children}) => {

  const [duties, setDuties] = useState(JSON.parse(localStorage.getItem('tareas')))

  return (
    <LocalContext.Provider value={{
        duties,
        setDuties
    }}>
        {children}
    </LocalContext.Provider>
  )
}

export default Provider