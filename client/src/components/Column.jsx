import React from "react"
import Square from './Square'


const Column = (props) => {

  //iterate thorough giving const squareNodes  <square>
console.log("props.index", props.value)
  const squareNodes = props.passedSquareNodes.map((squareValue, index) => {
    return(
      <Square 
      letterToRender={squareValue} 
      key={index} 
      index={index + (props.value * 3)}
      playerX = {props.playerX} 
      setPlayer={props.setPlayer.bind(this)}   
      setArrayElement = {props.setArrayElement.bind(this)}>
      </Square>
      )
  })

  return(
    <div className = "column">
      {squareNodes}
    </div>
    )
}

export default Column