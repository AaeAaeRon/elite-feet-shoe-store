import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoeContainer from './components/ShoeContainer'

class App extends React.Component  {
  state = {
    shoes: [],
    displayShoes: []
  }

  componentDidMount() {
    shoeUrl = "" 
    fetch(shoeUrl)
    .then(r => r.json())
    .then(getShoes => {
      this.setState({
        shoes: getShoes,
        displayShoes: getShoes
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ShoeContainer displayShoes={this.state.displayShoes}/>
        </header>
      </div>
    );
  }
  
}

export default App;
