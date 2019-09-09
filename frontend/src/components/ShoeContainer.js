import React from 'react'
import ShoeCard from './ShoeCard'

// import './App.css';
// import {Container, Row, Col} from 'react-bootstrap'
 
export default class ShoeContainer extends React.Component {

    render() {
        return(
        <div class="container-fluid mt-4">


            <div className="row justify-content-center">
                        
                {this.props.displayShoes.map(shoe => (<ShoeCard shoe={shoe} key={shoe.id} addFavorite={this.props.addFavorite}/> )) }
        </div>
    </div>
            
        )
    }
}   
