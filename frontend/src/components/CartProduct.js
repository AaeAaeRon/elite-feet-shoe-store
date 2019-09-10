import React, { Component } from "react";
import {FaTrashAlt, FaMinusSquare} from "react-icons/fa";

import {FaPlusSquare} from "react-icons/fa";
import {FaRegMinusSquare} from "react-icons/fa";

// import { Link } from "react-router-dom";



class CartProduct extends Component {
  

    render(){
      const {QuantityButton} = 
      `<div class="quantity">
        <button class="plus-btn" type="button" name="button">
        <img src="plus.svg" alt="" />
       </button>
      <input type="text" name="name" value="1">
     <button class="minus-btn" type="button" name="button">
      <img src="minus.svg" alt="" />
    </button>
    </div>`

    // function addIncrement(){
    //   var value = parseInt(document.querySelectorAll("input")[0].value)
    //   value = isNaN(value) ? 0 : value;
    //   value++;
    //   document.querySelectorAll('input').value = value;

    // }


      
      return(
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="border-0 bg-light">
                  <div class="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Price</div>
                </th>
                <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Quantity</div>
                </th>
                <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Remove</div>
                </th>

              </tr>
            </thead>
            <tbody>
              <tr>
              <th scope="row" class="border-0">
              <div class="p-2">
                <img src={this.props.shoe.img_url} alt="" width="70" class="img-fluid rounded shadow-sm"></img>

                <div class="ml-3 d-inline-block align-middle">
                          <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{this.props.shoe.name}</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: {this.props.shoe.category}</span>
                </div>


              </div>

              </th>
              <td class="border-0 align-middle"><strong>${this.props.shoe.price}</strong></td>
              <td class="align-middle"><strong> 
                <button class="plus-btn" type="button" name="button" >
                  <img src= {<FaPlusSquare/>} alt="" ></img>
                </button>
                 <input type="text" name="name" value="1"></input>
                <button class="minus-btn" type="button" name="button">
                  <img src={<FaRegMinusSquare/>} alt="" ></img>
                </button> 
          </strong> 
            </td>

              <td class="align-middle"><button class="text-dark" onClick={() => this.props.deletefromCart(this.props.shoe)} ><FaTrashAlt/></button></td>




              </tr>
            </tbody>

          </table>


        </div>

       
      )
    }
    
}

export default CartProduct



    
