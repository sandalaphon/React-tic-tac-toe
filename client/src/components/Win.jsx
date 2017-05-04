import React from "react"

const Win=(props)=>{
 if(!props.winner) {
  return null}

return(
  <div className="winner"><p>Congratulations {props.winner}</p></div>
  )
}



export default Win