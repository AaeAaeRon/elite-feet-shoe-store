import React from 'react'
import {Nav, Navbar, NavbarBrand, Container, NavbarHeader} from 'react-bootstrap'
import styled from 'styled-components'
import Login from './LogIn'

import Home from './Home'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShoeContainer from './ShoeContainer'
import SignUp from './SignUp'
import Favorite from './Favorite'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";





export default class NavBar extends React.Component {


    state={
        display: false,
        isOpen: false
    }

    openLogin = () => {
        this.setState({
            display: !this.state.display
        })
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }

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
                    <Navbar expand="lg" fixed="top">
                    <Navbar.Brand>  <Link to="/"> Home </Link></Navbar.Brand>
                    <Navbar.Brand>  <Link to="/shoes">Shoes </Link> </Navbar.Brand>
                    

                    <Navbar.Brand>
                        <Link to="/favorites">
                            Favorites
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Brand> <Link to="/signup">Sign Up</Link></Navbar.Brand>
                    <Navbar.Brand> <Link to="/login">Login </Link></Navbar.Brand>
                    <Navbar.Brand  id="cart"> <Link to ="/cart"><FaShoppingCart/> </Link></Navbar.Brand>
                    <Navbar.Brand> 
                        <button
                        type="button"
                        className="nav-btn"
                        onClick={this.handleToggle}> 

                        <FaAlignRight className='nav-icon nav-align-right'/>
                        
                        
                        </button>

                           
                
                    </Navbar.Brand>

                    <ul className={this.state.isOpen? "nav-link show-nav": "nav-links"}>
                        <li>
                            <Link to= "/login">Log In</Link>
                        </li>
                        <li>
                            <Link to="/signup"> Sign Up</Link>
                        </li>

                    </ul>






                        {/* <Navbar.Brand href="/">Shoe Store</Navbar.Brand> */}

                        {/* <Navbar.Brand onClick={this.openLogin} href="/login">Login</Navbar.Brand> */}

                        <Navbar.Toggle aria-controls ="basic-navbar-nav"/>
                    
                    </Navbar>
                </Styles>
                
                {/* <SignUp /> */}

                {this.state.display
                    ? <Login />
                    : null
                }
                
            </div>
        )
        
    
    }
}
