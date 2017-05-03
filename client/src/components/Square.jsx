import React from "react"

class Square extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      letterToRender: this.props.letterToRender,
      clicked: false
    }
  }

  handleClick(){
    var playerLetter = "X"
    if(!this.props.playerX){
    playerLetter = "O"
  }
    if(!this.state.clicked){
    this.setState({letterToRender: playerLetter})
    this.props.setArrayElement(this.props.index, playerLetter)
    this.props.setPlayer()
    this.setState({clicked: !this.state.clicked})
  }

  }

  render(){
    return(
      <span className = "square" onClick={this.handleClick}>
        {this.state.letterToRender}
      </span>
      )
  }
}
export default Square