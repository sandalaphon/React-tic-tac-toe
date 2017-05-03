import React from "react"
import Board from "../components/Board"

class TicTacToeContainer extends React.Component{

constructor(props) {
  super(props)
  this.state = {
      values: [1,2,3,4,5,6,7,8,9]
  }
}

render(){
  return(
    <div className="container-div">
      <Board squareValues={this.state.values}/>
    </div>
    )
}



}

export default TicTacToeContainer