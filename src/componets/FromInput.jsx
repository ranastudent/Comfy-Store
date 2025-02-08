import React from 'react'

const FromInput = ({label, name, type, defaultValue}) => {
  return (
    <div className='from0control'>
      <label className='label'>
            <span className='label-text'>{label}</span>
      </label>
     <input
            type={type}
            name={name}
            defaultValue={defaultValue}
            className='input input-bordered'
     />
    </div>
  )
}

export default FromInput
