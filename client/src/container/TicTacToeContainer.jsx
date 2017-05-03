import React from "react"
import Board from "../components/Board"

class TicTacToeContainer extends React.Component{

constructor(props) {
  super(props)
  this.state = {
      values: ["","","","","","","","",""],
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

componentDidUpdate(){
  if (!this.state.values.includes("")){
    alert("Draw!")
  }
  this.hasWon()
}

hasWon(){
  let winArray = []
  if (this.state.values[0] === this.state.values[1] && this.state.values[0] === this.state.values[2]){
      winArray = new Array(this.state.values[0],this.state.values[1],this.state.values[2])
  }
  else if (this.state.values[3] === this.state.values[4] && this.state.values[3] === this.state.values[5]) {
    winArray = new Array(this.state.values[3],this.state.values[4],this.state.values[5])
  }
else if (this.state.values[6] === this.state.values[7] && this.state.values[6] === this.state.values[8]) {
  winArray = new Array(this.state.values[6],this.state.values[7],this.state.values[8])
}
else if (this.state.values[0] === this.state.values[3] && this.state.values[0] === this.state.values[6]) {
  winArray = new Array(this.state.values[0],this.state.values[3],this.state.values[6])
}
else if (this.state.values[1] === this.state.values[4] && this.state.values[1] === this.state.values[7]) {
  winArray = new Array(this.state.values[1],this.state.values[4],this.state.values[7])
}
else if (this.state.values[2] === this.state.values[5] && this.state.values[2] === this.state.values[8]) {
  winArray = new Array(this.state.values[2],this.state.values[5],this.state.values[8])
}
else if(this.state.values[0] === this.state.values[4] && this.state.values[0] === this.state.values[8]) {
  winArray = new Array(this.state.values[0],this.state.values[4],this.state.values[8])
}
else if(this.state.values[2] === this.state.values[4] && this.state.values[2] === this.state.values[6]){
  winArray = new Array(this.state.values[2],this.state.values[4],this.state.values[6])
}

console.log(winArray)

if (winArray.length === 0){
  return
}
else if (winArray.includes("")) {
  return
}
else
  {
    alert("Congratulations!")
  }
}


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