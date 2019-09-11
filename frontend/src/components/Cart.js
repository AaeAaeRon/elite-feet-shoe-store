import React, { Component } from "react";
import CartProduct from "./CartProduct";

import { Link } from "react-router-dom";



class Cart extends Component{ 
    

  

    render(){

        return(
          <div class="pb-5">
              <div class="container">

                <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  {this.props.cart.map(shoe=> (<CartProduct shoe={shoe} key={shoe.id} deletefromCart={this.props.deletefromCart} addCart={this.props.addCart} />))}

                
       

                </div>
                </div>
                <div  >
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
            </ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
          </div>
        </div>
        </div>
                {/* <table>

                <tfoot>
              <tr>
                <td>
                  <Link to="/shoes" className="btn btn-warning">
                    <i className="fa fa-angle-left" /> Continue Shopping
                  </Link>
                </td>
                <td colSpan="2" className="hidden-xs" />
                <td className="hidden-xs text-center">
                <td><strong>Total</strong></td>
                            <td class="text-right"><strong> $346,90 </strong></td>
                  
                </td>
                <td>
                  <Link to="/checkout" className="btn btn-success btn-block">
                    Checkout
                    <i className="fa fa-angle-right" />
                  </Link>
                </td>
              </tr>
            </tfoot>
                </table> */}
                
               </div>
               
               <div>


                 
               </div>
            </div>


           
        )
    }
}

export default Cart

