import React from 'react'

const Input = (props) => {
    const {type, name, onChange, value} = props
  return (
    <div className="input-group">
        <label id={name}>{name.toUpperCase()}</label>
        <input type={type} name={name} onChange={onChange} value={value} autoComplete='off'/>
    </div>
  )
}

export default Input