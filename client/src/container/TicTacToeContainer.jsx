import React from "react"
import Board from "../components/Board"
import Win from "../components/Win"

class TicTacToeContainer extends React.Component{

constructor(props) {
  super(props)
  this.state = {
      values: ["","","","","","","","",""],
      playerX: true,
      winner: ""
  }
}

setArrayElement(index, newValue){
  const newValues = this.state.values.slice()
  newValues[index]=newValue
  this.setState({values:newValues})
}

setPlayer(){
  this.setState({playerX: !this.state.playerX})
}

componentDidUpdate(prevProps, prevState){
 
  if(prevState.values !== this.state.values)
   {this.hasWon()}

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

console.log("winArray",winArray)

if (winArray.length===0){
  return
}
else if (winArray.includes("")) {
  return
}
else 
  {
    if(this.state.playerX){
    this.setState({winner: "Player 'O'"})
  }else{ this.setState({winner: "Player 'X'"})
    }
  }
}


render(){
  return(
    <div className="container-div">
      <Board 
      playerX = {this.state.playerX} 
      setPlayer= {this.setPlayer.bind(this)}  
      squareValues= {this.state.values} 
      setArrayElement = {this.setArrayElement.bind(this)}/>
      <Win 
      winner= {this.state.winner}/>
    </div>
    )
}



}

export default TicTacToeContainer