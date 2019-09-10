import React from 'react'


export default class Login extends React.Component{

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    clearForm = () => { 
        document.getElementById("login-form").reset();
    }

    login = (e) => {
        if(this.state.username || this.state.password !== null){
            e.preventDefault()
            console.log('login')
            fetch('http://localhost:3000/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
            })
            .then(res => res.json())
            .then(console.log)
            this.clearForm()
            // this.props.history.push('/')
            // .then(data => {
            //     localStorage.token = data.token
            // })
        }
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
                <form id="login-form" className="border border-light p-5">
                    <p className="h4 mb-4 text-center">Login</p>
                    <input type="username" onChange={this.handleChange} name="username" id="defaultLoginFormUsername" className="form-control mb-4" placeholder="Username"/>
                    <input type="password" onChange={this.handleChange} name="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>
                    <button href='/login' onClick={this.login} className="btn btn-info btn-block my-4 btn-dark"  type="submit">Sign in</button>
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