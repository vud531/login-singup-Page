import React, {Component} from 'react';
// import { Link } from 'react-router-dom'
import fire from './Config/fire'

class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            email: '',
            password: ''
        }

    }

    login(e) {
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error)
        })
    }

    signup(e) {
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error)
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div class='form-group'>
                        <label for="exampleInputEmail">Email address</label>
                        <input 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        type='email' 
                        name='email'
                        class='form-control' 
                        id='exampleInputEmail' 
                        aria-describedBy="emailHelp"
                        placeholder="Enter email" />

                        <small 
                        id="emailHelp" 
                        class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class='form-group'>
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        type='password' 
                        name='password'
                        class='form-control' 
                        id='exampleInputPassword1' 
                        placeholder="Passwprd" />

                        <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                        <button onClick={this.signup} style={{marinLeft: '25px'}} class="btn btn-success">Signup</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login