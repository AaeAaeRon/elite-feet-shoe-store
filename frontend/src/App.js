import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'

class App extends React.Component  {
  
  constructor(){
    super()
    this.state = {
      shoes: [],
      displayShoes: []

    }
  }
  componentDidMount() {
    // shoeUrl = "http://localhost:3000/shoes" 
    fetch("http://localhost:3000/shoes")
    .then(res => res.json())
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
        <ShoeContainer displayShoes={this.state.displayShoes}/>
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
          </a>
          <NavBar/>
          <ShoeContainer displayShoes={this.state.displayShoes}/>
        </header>

      </div>
    );
  }
  
}

export default App;
