import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'
// import {BrowserRouter}
import {  BrowserRouter,Route} from 'react-router-dom'
// import {Container} from 'react-bootstrap'
import LogIn from './components/LogIn'
import Home from './components/Home'
import SignUp from './components/SignUp';
// import NoMatch from './components/NoMatch'

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
      selectedShoe: null

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
      cart: [...this.state.cart, cart]
    })
    

  }

  // viewShoe = (shoe) => {
  //   this.setState({
  //     selectedShoe: shoe
  //   })


  // }

 
  

  
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
          {/* <Route exact path='/' component={Home}/> */}
          {/* // <Route path='/shoes' render={(routerProps) => <ShoeContainer displayShoes={this.state.displayShoes} {...routerProps}/>}/> */}
          {/* <Route path='/login' render={(routerProps)=> <LogIn {...routerProps} />}/> */}
          {/* <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/> */}


          {/* <FilterShoes filterShoes={this.filterShoes}/> */}

     <nav className="nav-header">
          <Route exact path='/' component={Home}/>
          <Route path='/shoes' render={(routerProps) => 
            <ShoeContainer 
              displayShoes={this.state.displayShoes} 
              addFavorite={this.addFavorite}
              addCart={this.addCart}
              viewShoe={this.viewShoe}
              {...routerProps}/>}/>

          {/* <Route
            path="/shoes/:id"
            component={props => {
              const id = props.match.params.id;
              const shoe = this.state.shoes.find(
                shoe => shoe.id == id
              );

              if (this.state.shoes.length === 0) return <h1>Loading...</h1>;

              if (this.state.shoes.length > 0 && shoe === undefined)
                return <h1>Shoe not found</h1>;

              return (
                <ShoePage
                  {...props}
                  shoe={shoe}
                  addCart={this.addCart}
                />
              );
            }}
          /> */}
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
            cart={this.state.cart}
            addCart={this.addCart}
            deletefromCart={this.deletefromCart}
            />}/>

          </nav>

        
      </div>
      <Footer/>


      </BrowserRouter>

  
        
    );
  }
  
}

export default App;

