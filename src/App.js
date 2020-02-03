import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contador/>
    </div>
  );
}

class Contador extends Component {
  constructor (props){
    super(props);

    this.state={
      contador: 0
    };
  }

  aumentar = () => {
    this.setState(
      {
        contador: this.state.contador + 1
      }
    )
  }

  reiniciar = () => {
    this.setState(
      {
      contador: 0
      }
    )
  }

  render(){
    return (<div>
      <p>{this.state.contador}</p>
      <button onClick={this.aumentar}>Aumentar</button>
      <button onClick={this.reiniciar}>Reiniciar</button>
    </div>
      )
  }
}

export default App;
