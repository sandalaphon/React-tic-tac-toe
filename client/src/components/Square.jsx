import React from "react"

class Square extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      letterToRender: this.props.letterToRender
    }
  }

  handleClick(){
    this.setState({letterToRender: "X"})
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