import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class OrderTotal extends Component {
    
    render(){

        const orderPage = (
        <div id="order-bar"class="col-lg-12 justify-content-right"  >
        <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold" align="center">Order summary </div>
        <div class="p-4">
        <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
        <ul class="list-unstyled mb-4">
        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal: </strong><strong>${this.props.cart.reduce((sum, i) => {
            return sum + (i.price * i.quantity)}, 0)}</strong></li>
        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>${(0.0625 * this.props.cart.reduce((sum, i) => {
            return sum + (i.price * i.quantity)}, 0)).toFixed(2)}</strong></li>
        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
        <h5 class="font-weight-bold">${(0.0625 * this.props.cart.reduce((sum, i) => {
            return sum + (i.price * i.quantity)}, 0) + this.props.cart.reduce((sum, i) => {
            return sum + (i.price * i.quantity)}, 10.00)).toFixed(2)}</h5>
            </li>
          </ul>
          <Link to="/order"><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Place Order</a></Link>
        </div>
      </div>
      )
        return(
            <div>
            {this.props.cart.length === 0 ? (<div> </div>) : (orderPage)}
           
    </div>
        
        )
    }
}