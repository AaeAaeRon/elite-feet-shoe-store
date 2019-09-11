import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'
import Login from './LogIn'
import ShoeContainer from './ShoeContainer'
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
                    <Navbar.Brand  id="cart"> <Link to ="/cart" ><FaShoppingCart/> </Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls ="basic-navbar-nav"/>
                    </Navbar>
                </Styles>
                    <Navbar.Toggle aria-controls ="basic-navbar-nav"/>
            </div>
        )
        
    
    }
}
