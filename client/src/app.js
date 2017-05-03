import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToeContainer from "./container/TicTacToeContainer"

window.onload = function(){
  ReactDOM.render(
    <TicTacToeContainer/>,
    document.getElementById('app')
  );
}
