import React from 'react'


export default class SignUp extends React.Component {


    signUp = (e) => {
        e.preventDefault()
        console.log('hey')
    }

    render() {
        return (
            <div>
                <form className="border border-light p-5" >
                    <p className="h4 mb-4 text-center">Sign Up!</p>
                    <input type="username" id="defaultLoginFormUsername" className="form-control mb-4" placeholder="Username" />
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Confirm Password" />
                    <button onClick={this.signUp} className="btn btn-info btn-block my-4 btn-dark" type="submit">Register</button>
                    <div className="text-center">
                        <p>Already a member?
                            <a href="/login"> Login</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}