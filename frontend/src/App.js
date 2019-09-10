import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'
// import {BrowserRouter}
import {  BrowserRouter,Route} from 'react-router-dom'
// import {Container} from 'react-bootstrap'
import Login from './components/LogIn'
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

  addCart = (cart) => {
    this.setState({
      cart: [...this.state.cart, cart]
    })

  }

  deletefromFavorite = (favorite) => {
    this.setState({
      favorites:  this.state.favorites.filter(f => f != favorite)

    })

  }

  deletefromCart = (cart) => {
    this.setState({
      cart: this.state.cart.filter(c=>c !=cart)
    })

  }

  
  render() {
    return (

      <BrowserRouter>
        <div>
        <NavBar/>


     <nav className="nav-header">
          <Route exact path='/' component={Home}/>
          <Route path='/shoes' render={() => 
            <ShoeContainer 
              displayShoes={this.state.displayShoes} 
              addFavorite={this.addFavorite}
              addCart={this.addCart}/>}/>
          <Route path='/signup' render={()=> <SignUp/>}/>
          <Route path='/login' render={()=> <Login/>}/>

          <Route path= '/favorites' render={() => 
            <Favorite 
              favorites ={this.state.favorites}
              addFavorite={this.addFavorite}
              addCart={this.addCart}
              deletefromFavorite={this.deletefromFavorite}/>}/>

          <Route path='/cart' render={()=> 
            <Cart
            cart={this.state.cart}
            addCart={this.addCart}
            deletefromCart={this.deletefromCart}/>}/>

          </nav>

        
      </div>
      <Footer/>


      </BrowserRouter>

      
        
    );
  }
  
}

export default App;
{/* <ShoeContainer displayShoes={this.state.displayShoes}/> */}
