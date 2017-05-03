import React from "react"
import Square from './Square'


const Column = (props) => {

  //iterate thorough giving const squareNodes  <square>
  const squareNodes = props.passedSquareNodes.map((squareValue, index) => {
    return(
      <Square letterToRender={squareValue} key={index}></Square>
      )
  })

  return(
    <div className = "column">
      {squareNodes}
    </div>
    )
}

export default Column