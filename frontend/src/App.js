import React from 'react';
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
        <ShoeContainer displayShoes={this.state.displayShoes}/>
        <header className="App-header">
          {/* <NavBar/> */}
        </header>
      </div>
    );
  }
  
}

export default App;
