import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'

import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import {Container} from 'react-bootstrap'
// import {Login} from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp';
// import NoMatch from './components/NoMatch'



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

      <Router>
      <div>
        <NavBar/>

     
          <Route path='/' component={Home}/>
          <Route path='/shoes' render={() => <ShoeContainer displayShoes={this.state.displayShoes}/>}/>
          <Route path='/signup' render={()=> <SignUp/>}/>

        

        <ShoeContainer displayShoes={this.state.displayShoes}/>
      </div>
      </Router>
        
    );
  }
  
}

export default App;
{/* <ShoeContainer displayShoes={this.state.displayShoes}/> */}
