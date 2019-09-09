import React from 'react'
import ShoeCard from './ShoeCard'

// import './App.css';
// import {Container, Row, Col} from 'react-bootstrap'
 
export default class ShoeContainer extends React.Component {

    render() {
        return(
            <div className="container">
                <div className="row">        
                    {this.props.displayShoes.map(all => <ShoeCard all={all}/>)}
                </div>
            </div>       
        )
    }
}   
