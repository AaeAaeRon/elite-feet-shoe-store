import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {LogIn} from './components/LogIn'
// import {NoMatch} from './components/NoMatch'


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
      <div>
        <Router>
          <Switch>
            {/* <Route exact path='/' component ={Home} /> */}
            {/* <Route path='/login' component={LogIn} /> */}
            {/* <Route component ={NoMatch}/> */}
          </Switch>

      </Router>
        <NavBar/>

        <ShoeContainer displayShoes={this.state.displayShoes}/>
        <header className="App-header">
          <NavBar/>
        </header>

        <ShoeContainer displayShoes={this.state.displayShoes}/>

        
      </div>
    );
  }
  
}

export default App;
