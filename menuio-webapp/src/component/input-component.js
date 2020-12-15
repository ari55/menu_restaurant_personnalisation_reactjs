import React from 'react'

const InputComponent = ({ text, id, name, value, type, onChange, classNameDiv }) => (
    <div className={classNameDiv}>
        <label htmlFor={id}>{text}</label>
        <input type={type} id={id} name={name} value={value} onChange={onChange} className='form-control' />
    </div>
)

export default InputComponent
