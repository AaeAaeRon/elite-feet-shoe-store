import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'

class App extends React.Component  {
  state = {
    shoes: [],
    displayShoes: []
  }

  componentDidMount() {
    let shoeUrl = "http://localhost:3000/shoes" 
    fetch(shoeUrl)
    .then(r => r.json())
    .then(shoes => {
      this.setState({
        shoes: shoes,
        displayShoes: shoes
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <NavBar/>
        </header>

        <ShoeContainer displayShoes={this.state.displayShoes}/>

        
      </div>
    );
  }
  
}

export default App;
