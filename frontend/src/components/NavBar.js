import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'
import Login from './LogIn'


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
                        <Navbar.Brand href="/">Favorites</Navbar.Brand> 
                        <Navbar.Brand onClick={<Login />} href="/login">Login</Navbar.Brand>
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
