import React, {useState} from 'react'
import useCrud from './useCrud'

const useFilter = () => {

    const [filter, setFilter] = useState('all')

    const handleFilter = (filter) =>{
        setFilter(filter)
    }

  return {
        filter,
        handleFilter
  }
}

export default useFilter