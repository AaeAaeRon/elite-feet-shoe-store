import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'
import FilterShoes from './components/FilterShoes'
import {BrowserRouter,Route} from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'
import SignUp from './components/SignUp';
import Favorite from './components/Favorite'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ShoePage from './components/ShoePage'

class App extends React.Component  {
  
  constructor(){
    super()
    this.state = {
      shoes: [],
      displayShoes: [],
      favorites: [],
      cart: [],
      selectedShoe: null,
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/shoes")
    .then(res => res.json())
    .then(shoes => {
      this.setState({
        shoes: shoes,
        displayShoes: shoes
      })
    })
  }



  filterShoes = (e) => {
    if (e === "All") {
      this.setState({
        displayShoes: this.state.shoes
      })
    } 
    else {
      this.setState({
        displayShoes: this.state.shoes.filter(aShoe => aShoe.category === e)
      })
    }
  }

  addFavorite = (favorite) => {
    this.setState({
      favorites: [...this.state.favorites, favorite],
    })

  }

  addCart = (cart) => {
    this.setState({
      cart: [...this.state.cart, cart],
      total:cart 
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
              <Route path= {`/shoes`} render={(routerProps) =><ShoeContainer 
                displayShoes={this.state.displayShoes} 
                addFavorite={this.addFavorite}
                addCart={this.addCart}
                viewShoe={this.viewShoe}
                filterShoes={this.filterShoes}
              /> }/>
              

              <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/>
              <Route path='/login' render={(routerProps)=> <LogIn {...routerProps}/>}/>

              <Route path= '/favorites' render={() => 

                <Favorite 
                  favorites ={this.state.favorites}

                  addFavorite={this.addFavorite}
                  addCart={this.addCart}
                  deletefromFavorite={this.deletefromFavorite}/>}/>


              <Route path='/cart' render={()=> 
                <Cart
                displayShoes={this.state.displayShoes} 

                cart={this.state.cart}
                addCart={this.addCart}
                deletefromCart={this.deletefromCart}
                />}/>

              </nav>


          <Route path='/cart' render={()=> 
          <Cart
          cart={this.state.cart}
          addCart={this.addCart}
          deletefromCart={this.deletefromCart}/>}/>
      </div>
      </BrowserRouter>
        

    );
  }
  
}
export default App;

