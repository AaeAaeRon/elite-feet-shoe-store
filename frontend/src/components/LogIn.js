import React from 'react'


export default class Login extends React.Component{

    login = (e) => {
        e.preventDefault()
        console.log('hey')
        
    }

    // handelClick = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
        

    render(){
        return(
            <div>
                <br>
                
                </br>
                <form className="border border-light p-5">
                    <p className="h4 mb-4 text-center">Login</p>
                    <input type="username"  name="username" id="defaultLoginFormUsername" className="form-control mb-4" placeholder="Username"/>
                    <input type="password"  name="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>
                    <button href='/login'  className="btn btn-info btn-block my-4 btn-dark" type="submit">Sign in</button>
                    <div className="text-center">
                        <p>Not a member?
                            <a href="/signup"> Register</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}