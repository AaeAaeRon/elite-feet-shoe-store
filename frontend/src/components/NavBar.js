import React from 'react'

export default class NavBar extends React.Component {

    render(){
        return(
            <div className='navbar navbar-expand-md navbar-dark bg-dark'>
                <a className="text-center"> Shoe Store</a>
            </div>
        )
        
    render() {
        return(
            <div className="navbar">
                <div className="align1">
                    <div className="dropdown-shoe">
                        <button className="dropbutton">Shoes
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">All</a>
                            <a href="#">Category 1</a>
                            <a href="#">Category 2</a>
                            <a href="#">Category 3</a>
                            <a href="#">Category 4</a>
                        </div>
                    </div>
                    <a href="#favorites">Favorites</a> 
                </div>
                <div className="align2">
                    <a href="#checkout">Checkout</a> 
                </div>
            </div>
        )

    }
}