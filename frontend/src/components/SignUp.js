import React from 'react'

export default class SignUp extends React.Component {

    clearForm = () => { 
        document.getElementById("sign-up").reset();
    }

    ///////USER SIGN UP///////
    signUp = (e) => {
        
        if(this.state.username || this.state.password !== null){
            e.preventDefault()
            console.log('hey')
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user:{
                        username: this.state.username,
                        password: this.state.password
                    }
                })
            })
            this.clearForm()
            this.props.history.push('/')
        }
       
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <br>
                    
                </br>
                <form id='sign-up' className="border border-light p-5" >
                    <p className="h4 mb-4 text-center">Sign Up!</p>
                    <input type="username" onChange={this.handleChange} name="username" id="defaultSignUpFormUsername" className="form-control mb-4" placeholder="Username" />
                    <input type="password" onChange={this.handleChange} name="password" id="defaultSignUpFormPassword" className="form-control mb-4" placeholder="Password" />
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