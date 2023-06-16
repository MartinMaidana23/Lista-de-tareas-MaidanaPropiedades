import React from 'react'
import './input.css'

const Input = (props) => {
    const {type, name, onChange, value, placeholder} = props
  return (
    <>
      <input type={type} name={name} onChange={onChange} value={value} autoComplete='off' placeholder={placeholder} />
    </>
  )
}

export default Input