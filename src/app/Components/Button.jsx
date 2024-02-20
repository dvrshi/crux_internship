import React from 'react'

function Button({name,cross}) {
  return (
    <button className='p-3 border rounded-lg'>{name}</button>
  )
}

export default Button