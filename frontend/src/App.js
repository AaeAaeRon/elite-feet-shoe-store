import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'

import {  BrowserRouter,Route} from 'react-router-dom'
// import {Container} from 'react-bootstrap'
import LogIn from './components/LogIn'
import Home from './components/Home'
import SignUp from './components/SignUp';
// import NoMatch from './components/NoMatch'

import Favorite from './components/Favorite'
import Cart from './components/Cart'
import Footer from './components/Footer'



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

      <Router>
      <div>
        <NavBar/>
          <Route exact path='/' component={Home}/>
          <Route path='/shoes' render={(routerProps) => <ShoeContainer displayShoes={this.state.displayShoes} {...routerProps}/>}/>
          <Route path='/login' render={(routerProps)=> <LogIn {...routerProps} />}/>
          <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/>


     <nav className="nav-header">
          <Route exact path='/' component={Home}/>
          <Route path='/shoes' render={() => <ShoeContainer displayShoes={this.state.displayShoes} addFavorite={this.addFavorite}/>}/>
          <Route path='/signup' render={()=> <SignUp/>}/>
          <Route path='/login' render={()=> <Login/>}/>

          <Route path= '/favorites' render={() => 
            <Favorite 
              favorites ={this.state.favorites}
              addFavorite={this.addFavorite}/>}/>

          <Route path='/cart' render={()=> <Cart/>}/>

          </nav>

        
      </div>
      <Footer/>


      </BrowserRouter>

  
        
    );
  }
  
}

export default App;

