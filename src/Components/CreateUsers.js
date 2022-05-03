import React, { Component } from 'react';
import axios from 'axios';
const usersUrl = "http://localhost:4000/users";

async function create(name) {
    const response = await fetch(`${usersUrl}/create-user`, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "access-control-request-headers": "content-type",
            "x-Trigger": "CORS",
        },
        body: JSON.stringify({ name }),
    })
    console.log("RESPONSE:", response.status);
    const userResponse = await response.text();
    console.log('CREATE USER RESPONSE:', userResponse);
    return userResponse;
}
export class CreateUsers extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            userCreated: false,
        };
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    createUserClick = async () => {
        const { firstName, lastName, userName, email, password } = this.state;

        axios.post(`/create-user`, {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    userName: response.data.userName,
                    email: response.data.email,
                    password: response.data.password
                });
            });
    }
    createUser = async () => {
        const createResponse = await create()
        console.log("CREATED USER:", createResponse);
    }
    render() {
        return (
            <div>
                <h2>Create User</h2>
                <div className='user-info'>
                    <div className='user response' name='userCreated'>
                        {this.state.userCreated ? 'User Successfully Created!' : ""}
                    </div>
                    <br />

                    <div name="firstName">FirstName:{this.state.firstName}</div>
                    <div name="lastName">LastName:{this.state.lastName}</div>
                    <div name='userName'>UserName:{this.state.userName}</div>
                    <div name='email'>Email:{this.state.email}</div>
                    <div name='password'>Password:{this.state.password}</div>
                    <br />

                    <div className='inputs'>
                        <input name='firstName' placeholder="FirstName" onChange={this.handleChange} />
                        <input name='lastName' placeholder="LastName" onChange={this.handleChange} />
                        <input name='userName' placeholder="UserName" onChange={this.handleChange} />
                        <input name='email' placeholder="Email" onChange={this.handleChange} />
                        <input name='password' placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <button onClick={this.createUser}>CreateUser</button>
                </div>

            </div>
        )
    }
}
export default CreateUsers; 