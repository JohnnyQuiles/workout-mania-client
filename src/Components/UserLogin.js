import React, { Component } from 'react';
import axios from 'axios';

export class UserLogin extends Component {
    constructor() {
        super();
        this.state = {
            email:"",
            password:"",
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
        console.log(this.state);
    }
    userLoginClick = async () => {
        axios.get(`/users/login`)
    }
}