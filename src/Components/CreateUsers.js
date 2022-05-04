import React, { Component } from 'react';
const usersUrl = 'http://localhost:4000/users';

export class CreateUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
        };
    }
    create = async () => {
        const response = await fetch(`${usersUrl}/create-user`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "access-control-request-headers": "content-type",
                "x-Trigger": "CORS",
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();
    
        console.log('CREATE USER RESPONSE:', userResponse);
        return userResponse;
    }
    handleFirstName = (event) => {
        this.setState({ firstName: event.target.value })
    }
    handleLastName = (event) => {
        this.setState({ lastName: event.target.value })
    }
    handleUserName = (event) => {
        this.setState({ username: event.target.value })
    }
    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    createUser = async () => {
        const createResponse = await this.create()
        console.log("CREATED USER:", createResponse);
    }
    render() {
        return (
            <div>
                <h2>Create User</h2>
                <div className='user-info'>
                    <div className='inputs'>
                        <input name='firstName' placeholder="FirstName" value={this.state.firstName} onChange={this.handleFirstName} />
                        <input name='lastName' placeholder="LastName" value={this.state.lastName} onChange={this.handleLastName} />
                        <input name='username' placeholder="Username" value={this.state.username} onChange={this.handleUserName} />
                        <input name='email' placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
                        <input name='password' placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                    </div>
                    <button onClick={this.createUser}>CreateUser</button>
                </div>
            </div>
        )
    }
}
export default CreateUsers; 