import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'
import Login from './LogIn'
import SignUp from "./SignUp";


export default class NavBar extends React.Component {


    state={
        display: false
    }

    openLogin = () => {
        this.setState({
            display: !this.state.display
        })
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
                    <Navbar expand="lg">
                        <Navbar.Brand href="/">Shoe Store</Navbar.Brand>
                        <Navbar.Brand onClick={this.openLogin} href="/login">Login</Navbar.Brand>
                        <Navbar.Toggle aria-controls ="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav.Item> Testing</Nav.Item>
                            <Nav.Item>Stuff</Nav.Item>

                        </Navbar.Collapse>
                    </Navbar>
                </Styles>
                
                <SignUp />

                {this.state.display
                    ? <Login />
                    : null
                }
                
            </div>
        )
        
    
    }
}
