import React, {Component} from "react";
import ReactDOM from 'react-dom';
const root = document.querySelector('#root');


class App extends Component {
  render(){
    return(
      <div> 

        <h1>HELLOU</h1>

      </div>

    );
  }
}



ReactDOM.render(<App />, root);