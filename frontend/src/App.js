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

import Favorite from './components/Favorite'



class App extends React.Component  {
  
  constructor(){
    super()
    this.state = {
      shoes: [],
      displayShoes: [],
      favorites: [],
      cart: []

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

  addFavorite = (favorite) => {
    this.setState({
      favorites: [...this.state.favorites, favorite],
    })
    // debugger
 

  }

  
  render() {
    return (

      <BrowserRouter>
      <div>
        <NavBar/>

     
          <Route exact path='/' component={Home}/>
          <Route path='/shoes' render={() => <ShoeContainer displayShoes={this.state.displayShoes} addFavorite={this.addFavorite}/>}/>
          <Route path='/signup' render={()=> <SignUp/>}/>
          <Route path= '/favorites' render={() => 
            <Favorite 
              favorites ={this.state.favorites}
              addFavorite={this.addFavorite}/>}/>

        

        <ShoeContainer displayShoes={this.state.displayShoes}/>
      </div>
      </BrowserRouter>
        
    );
  }
  
}

export default App;
{/* <ShoeContainer displayShoes={this.state.displayShoes}/> */}
