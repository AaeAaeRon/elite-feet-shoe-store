import React from 'react'

import ShoeCard from './ShoeCard'
import Cart from './Cart'

// import './App.css';
// import {Container, Row, Col} from 'react-bootstrap'
 
export default class ShoeContainer extends React.Component {

    render() {
        console.log(this.props)
        return(

        <div className="container-fluid mt-4">
            {this.props.filterShoes} 
            {this.props.sortByPrice} 
            {this.props.sortByAlpha} 





            <div className="row justify-content-center">
                        
                {this.props.displayShoes.map(shoe =>  (<ShoeCard shoe={shoe} key={shoe.id} addFavorite={this.props.addFavorite} addCart={this.props.addCart}/> )) }

        </div>
    </div>
            
        )
    }
}   
