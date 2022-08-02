import React from 'react'
import "./resetbutton.css"


const ResetButton = ({resetBoard}) => {
  return (
    <button className='reset-btn' onClick={resetBoard}> Reset </button>
  )
}

export default ResetButton