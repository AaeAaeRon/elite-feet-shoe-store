import React from 'react'


export default class Login extends React.Component{

    login = (e) => {
        e.preventDefault()
        console.log('hey')
    }

    render(){
        return(
            <div>
                <form className="border border-light p-5">
                    <p className="h4 mb-4 text-center">Sign in</p>
                    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Username"/>
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>
                    <button href='/login'  className="btn btn-info btn-block my-4 btn-dark" type="submit">Sign in</button>
                    <div className="text-center">
                        <p>Not a member?
                            <a href="/"> Register</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}