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
      <div>
        <NavBar/>

        <ShoeContainer displayShoes={this.state.displayShoes}/>
      </div>
    );
  }
  
}

export default App;
