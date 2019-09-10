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
                  {this.props.cart.map(shoe=> (<CartProduct shoe={shoe} key={shoe.id} deletefromCart={this.props.deletefromCart}/>))}

                </div>
                </div>
               </div>
            </div>

           
        )
    }
}

export default Cart

