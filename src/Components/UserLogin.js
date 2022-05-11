import React, { Component } from 'react';
import { AuthConsumer } from '../authContext';

const usersUrl = 'http://localhost:4000/users';


export class UsersLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    componentDidMount() {

    }

    login = async () => {
        const response = await fetch(`${usersUrl}/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "acces-control-request-headers": "content-type",
                "x-Trigger": "CORS",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();

        console.log("USER RESPONSE:", userResponse);
        return userResponse;
    }
    handleEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    userLogin = async () => {
        const loginResponse = await this.login()
        console.log("Login user:", loginResponse);

        return loginResponse.payload;

    }
    render() {
        return (
            <AuthConsumer>
                {({ authToken, setAuthToken }) => (
                    <div>
                        <div className='user-login'>
                            <div className='inputs'>
                                <input name='email' placeholder='Enter email' value={this.state.email} onChange={this.handleEmail} />
                                <br />

                                <input name='password' placeholder='Enter password' value={this.state.password} onChange={this.handlePassword} />
                            </div>
                            <button onClick={async () => {
                                const newAuthToken = await this.userLogin()
                                setAuthToken(newAuthToken)
                                console.log(authToken);
                            }}>Login</button>
                        </div>
                    </div>

                )}
            </AuthConsumer>
        )
    }
}
export default UsersLogin; 
