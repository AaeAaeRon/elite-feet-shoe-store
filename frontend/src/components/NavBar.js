import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

export default class NavBar extends React.Component {

    render(){
        const Styles = styled.div`
        .navbar {
            background-color: #222
        
         }
         .navbar-brand, .navbar-nav .nav-link{
             color: #bbb; 

        %:hover {
            color: white
        }
         }
    `
        return(
            <div>
                <Styles>
                    <Navbar expand="lg">
                        <Navbar.Brand href="/">Shoe Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls ="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav.Item> Testing</Nav.Item>
                            <Nav.Item>Stuff</Nav.Item>

                        </Navbar.Collapse>
                    </Navbar>
                </Styles>
                
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

// className='navbar navbar-expand-md navbar-dark bg-dark'>
//                 <a className="text-center"> Shoe Store