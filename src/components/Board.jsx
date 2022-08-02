import React from 'react'
import Box from "./Box"
import "./board.css"
const Board = ({board,onClick}) => {
  return (
    <div className='board'>  
        {board.map((value,index)=>{
        return <Box value={value} onClick={()=>value === null && onClick(index)}/>

        })
        }
    
    </div>
  )
}

export default Board