import React from 'react'
import { Link } from "react-router-dom";



export default class ShoeCard extends React.Component {
    
    render() {
        return(


            
            <div className="col-lg-3 d-flex align-items-stretch"> 
            {/* <Link to={`/shoes/${this.props.shoe.id}`}> */}

            <div id= "shoe-card" className="card text-center">

                <img className="card-img-top" src={this.props.shoe.img_url} alt="shoes">

                </img>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.shoe.name}</h4>
                    <p className="card-text text-secondary"> Category {this.props.shoe.category}</p>
                    <p className="card-text text-secondary"> Price: ${this.props.shoe.price}</p>


                    <button type="button" className="btn btn-outline-secondary" onClick={() => this.props.addFavorite(this.props.shoe)}>Favorite</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={()=> this.props.addCart(this.props.shoe)}>Add to Cart</button>
                    {/* <button type="button" className="btn btn-outline-secondary" 
                     onClick={() => {
                        // event.preventDefault();
                        // event.stopPropagation();
                        this.props.viewShoe(this.props.shoe);
                      }}>Details</button> */}





                </div>


            </div>
            {/* </Link> */}

            </div>

    

        )
    }
}


// onClick={() => this.props.addFavorite(this.props.all)}