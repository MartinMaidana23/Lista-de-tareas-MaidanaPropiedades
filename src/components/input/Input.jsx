import React from 'react'

const Input = (props) => {
    const {type, name, onChange, value} = props
  return (
    <>
        <label id={name}>{name.toUpperCase()}</label>
        <input type={type} name={name} onChange={onChange} value={value} />
    </>
  )
}

export default Input