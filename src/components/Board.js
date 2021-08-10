import React from 'react'
import Box from './Box'
import Hello from './Hello'
const Board = () => {
    return (
        <div className="board">
            <Box onClick={()=>{
            }}/>
        </div>
    )
}

export default Board
// "scripts": {
//     "start": "parcel index.html",
//     "build": "parcel build index.html",
//     "predeploy": "npm run build",
//     "deploy": "gh-pages -d build"
//   },