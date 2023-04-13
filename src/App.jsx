import React from 'react'
import Container from './components/container/Container'
import TodoProvider from './context/TodoProvider'

function App() {

  return (
    <TodoProvider>
      <Container/>
    </TodoProvider>
  )
}

export default App
