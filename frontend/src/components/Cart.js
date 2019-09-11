import React, { Component } from "react";
import CartProduct from "./CartProduct";
import OrderTotal from "./OrderTotal"

import { Link } from "react-router-dom";



class Cart extends Component{ 
    

  

    render(){

        return(
          <div class="pb-5">
              <div class="container">

                <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                {this.props.cart.length === 0 ? (
                <div class="alert alert-danger large" role="alert">
                  You don't have any product in your basket
                </div>
              ) : (
                  this.props.cart.map(shoe=> (<CartProduct shoe={shoe} key={shoe.id} deletefromCart={this.props.deletefromCart} addCart={this.props.addCart}/>))
                  ) }

                  <Link to="/shoes"><button className="btn btn-info btn-dark">Continue Shopping</button></Link>
                </div>
                </div>
                <OrderTotal cart={this.props.cart}/>
                
               </div>
               <div>


                 
               </div>
            </div>


           
        )
    }
}

export default Cart

