import React from 'react'
import { toCamelCase } from '../../utils'
import './Input.css'

function Input({fieldName, type, ...props}) {
  return (
    <div className='form-group mb-6'>
      {/* Add name attr */}
      {/* Add onChange attr and pass event param to onChange() from props */}
      <input onChange={props.handleOnChange} name={toCamelCase(fieldName)} placeholder={`${fieldName}`} type={`${type}`} className="focus:outline-none focus:ring focus:ring-primary focus:ring-1 form-input px-4 py-3 w-full rounded-sm" />
    </div>
  )
}

export default Input