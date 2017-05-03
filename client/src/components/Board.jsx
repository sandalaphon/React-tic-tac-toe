import React from "react"
import Column from "./Column"

class Board extends React.Component{

  constructor(props){
    super(props)
    this.state = {
    }
  }

  
  render(){
    const first3= this.props.squareValues.slice(0,3)
    const second3= this.props.squareValues.slice(3,6)
    const last3= this.props.squareValues.slice(6)
    const columnArrays= [first3, second3, last3]
    console.log(columnArrays)
    const columnNodes = columnArrays.map((array, index)=>{
      return(
        <Column passedSquareNodes = {array} key = {index}>
        </Column>
        )
    })
    console.log(columnNodes)

    return(
      <div className="ticTacToe">
        {columnNodes}
      </div>
      )
  }

}


export default Board