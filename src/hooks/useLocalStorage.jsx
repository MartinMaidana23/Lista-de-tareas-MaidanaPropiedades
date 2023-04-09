import React, { useState } from 'react'

const useLocalStorage = (item) => {
    const [valor, setValor] = useState(localStorage.getItem(item))

    const set = (key, value)=>{
        localStorage.setItem(key, value)
        setValor(valor)
        return 
    }

  return {
    valor, 
    set
  }
}

export default useLocalStorage