import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Order extends Component {
    render(){
        return(
            <React.Fragment>
            <div id="order-page" className="container-fluid text-center">
            <h2>Your Order has been placed</h2>  

            <Link to="/shoes"><button className="btn btn-info btn-dark">Continue Shopping</button></Link>
            



            </div>

            </React.Fragment>
        )
    
    }
}