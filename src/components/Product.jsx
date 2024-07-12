import React from 'react'
import { NavLink } from 'react-router-dom'

function Product() {
  return (
    <div className='border p-5 m-4'>
      <h1>This is product page</h1>
      <p>hello</p>
      <NavLink to="/" className="underline">Back to dashboard</NavLink>
    </div>
  )
}

export default Product