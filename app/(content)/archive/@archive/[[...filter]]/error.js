'use client'
import React from 'react'

const FilterError = ({error}) => {
  return (
    <div id="error">
      <h1>An error occured!</h1>
      <p>{error.message}</p>
    </div>
  )
}

export default FilterError