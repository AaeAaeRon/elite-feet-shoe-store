import React from 'react'
import {Nav, Navbar, NavbarBrand, Container, NavbarHeader} from 'react-bootstrap'
import styled from 'styled-components'
import Login from './LogIn'
import Home from './Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShoeContainer from './ShoeContainer'
import SignUp from './SignUp'



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
                    <Navbar expand="lg" fixed="top">
                    <Navbar.Brand onClick={<Home />} href="/home">Home</Navbar.Brand>
                    <Navbar.Brand onClick={<Login />} href="/login">Login</Navbar.Brand>
                    <Navbar.Brand onClick={<ShoeContainer />} href="/shoes">Shoes</Navbar.Brand>
                    <Navbar.Brand onClick={<SignUp />} href="/signup">Sign Up</Navbar.Brand>




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
        
    
    }
}
