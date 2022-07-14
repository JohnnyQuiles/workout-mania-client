import React, { useState } from 'react';
import Layout from '../Components/Layout';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from '../Redux/userSlice';
import { Box, Button, Card, Container, Input } from '@mui/material';
import Dashboard from './Dashboard';

import '../App.css';


function Login() {
    const usersUrl = 'http://localhost:5017/users';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    //API=====================================================
    const login = async () => {
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
                username: username,
                password: password
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();
        return userResponse;
    }

    const userLogin = async () => {
        const loginResponse = await login();
        console.log("Login user:", loginResponse);

        dispatch(logIn({ user: loginResponse }));
        return loginResponse.payload;

    };

    const userLogout = () => {
        dispatch(logOut(null));
        navigate(`/login`);
    };

    //IF USER IS LOGGED IN DISPLAY 
    //USERNAME AND LOGOUT BUTTON
    if (user) {
        return (
            <Layout>

                <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#003049',
                        borderRadius: '8px',

                    }}>
                        <br />
                        <br />

                        <Dashboard />

                        <h1 className="App-header" style={{ color: '#fca311' }}>{username}</h1>


                        <br />
                        <br />

                        <Button
                            style={{ background: '#fca311' }}
                            onClick={() => {
                                userLogout();

                            }}>Logout</Button>
                    </Box>
                </Container>
            </Layout>
        )
    }

    //IF THERE IS NO USER DISPLAY THIS
    if (!user) {
        return (
            <Layout>

                <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#003049',
                        borderRadius: '8px',

                    }}>
                        <div className='Login'>

                            <h3 className='App-Sub'>Have an existing account?</h3>

                            <Container style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Box maxWidth="100%" sx={{
                                    background: '#003049',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }}>

                                    <input className='App-Inputs' type='text' placeholder='Username' value={username} onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />

                                    <br />

                                    <input className='App-Inputs' type='text' placeholder='Password' value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />

                                    <br />

                                    <button className='App-button' onClick={async () => {
                                        window.localStorage.getItem("users", JSON.stringify({
                                            username,
                                            password
                                        }));

                                        await userLogin();
                                        navigate(`/login/dashboard`);
                                    }}>login</button>

                                </Box>
                            </Container>
                        </div>
                    </Box>
                </Container>
            </Layout>
        )
    }



}
export default Login; 
