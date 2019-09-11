import React from 'react'
import ShoeCard from './ShoeCard'
import Cart from './Cart'
import FilterShoes from './FilterShoes';
import SortShoes from './SortShoes'


// import './App.css';
// import {Container, Row, Col} from 'react-bootstrap'
 
export default class ShoeContainer extends React.Component {

    render() {
        console.log(this.props)
        return(

        <div className="container-fluid mt-4">
            <div>
            <FilterShoes filterShoes={this.props.filterShoes}/>
            <SortShoes sortByPrice={this.props.sortByPrice} sortByAlpha={this.props.sortByAlpha}/>
            </div>
            <br></br>            





            <div className="row justify-content-center">
                        
                {this.props.displayShoes.map(shoe =>  (<ShoeCard shoe={shoe} key={shoe.id} addFavorite={this.props.addFavorite} addCart={this.props.addCart}/> )) }

        </div>
    </div>
            
        )
    }
}   
