import React from "react"
import Board from "../components/Board"

class TicTacToeContainer extends React.Component{

constructor(props) {
  super(props)
  this.state = {
      values: [1,2,3,4,5,6,7,8,9],
      playerX: true
  }
}

setArrayElement(index, newValue){
  const newValues = this.state.values
  console.log(newValues)
  newValues[index]=newValue
  console.log(newValues)
  this.setState({values:newValues})
  console.log(this.state.values)
}

setPlayer(){
  this.setState({playerX: !this.state.playerX})
}

// componentDidUpdate(){
//   win condition
// }

render(){
  console.log(this.state.values)
  return(
    <div className="container-div">
      <Board 
      playerX = {this.state.playerX} 
      setPlayer={this.setPlayer.bind(this)}  
      squareValues={this.state.values} 
      setArrayElement = {this.setArrayElement.bind(this)}/>
    </div>
    )

}



}

export default TicTacToeContainer