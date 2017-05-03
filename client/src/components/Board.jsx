import React from "react"

class Board extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className="ticTacToe">
        <p>Board goes here</p>
      </div>
      )
  }

}


export default Board