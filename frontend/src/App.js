import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar'
import ShoeContainer from './components/ShoeContainer'
import FilterShoes from './components/FilterShoes'
import SortShoes from './components/SortShoes'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
// import {Container} from 'react-bootstrap'
// import {LogIn} from './components/LogIn'
// import {NoMatch} from './components/NoMatch'


class App extends React.Component  {
  
  constructor(){
    super()
    this.state = {
      shoes: [],
      displayShoes: [],
      everyShoes: [],
      favoriteShoes: [],

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

  addFavoriteShoes = all => {
    this.setState({
      everyShoes: [...this.state.everyShoes,all], 
      favoriteShoes: [...this.state.everyShoes,all]
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

  sortByPrice = () => {
    this.setState({
      displayShoes: this.state.shoes.sort((a,b) => a.price > b.price ? 1 : -1)
    })
  }

  sortByAlpha = () => {
    this.setState({
      displayShoes: this.state.shoes.sort((a,b) => a.name > b.name ? 1 : -1)
    })
  }
      

  dltFavoriteShoes = all => {
    // let dlt = this.state.everyShoes.filter(s => s !== all)
    this.setState({
      everyShoes: this.state.everyShoes.filter(s => s !== all)
    })
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="App-header">
            <NavBar favoriteShoes={this.state.favoriteShoes} />
          </header>
          <FilterShoes filterShoes={this.filterShoes}/>
          <SortShoes sortByPrice={this.sortByPrice} sortByAlpha={this.sortByAlpha}/>
          <Switch>
            {/* <Route path="/favorites" render={(routeProps) => <FavShoes {...routeProps} favoriteShoes={this.state.favoriteShoes}/>}/> */}
            <Route path="/shoes" render={() => <ShoeContainer displayShoes={this.state.displayShoes} addFavoriteShoes={this.addFavoriteShoes}/>}/>
            {/* <Route exact path='/' component ={Home} /> */}
            {/* <Route path='/login' component={LogIn} /> */}
            {/* <Route component ={NoMatch}/> */}
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
