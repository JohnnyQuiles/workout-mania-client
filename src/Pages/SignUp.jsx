import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
import Layout from '../Components/Layout';
import { Box, Container } from '@mui/material';
import '../App.css';
import { useSelector } from 'react-redux';

function SignUp() {
    const usersUrl = 'http://localhost:5017/users';

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    //API ========================================================
    const create = async () => {
        const response = await fetch(`${usersUrl}/create`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "access-control-request-headers": "content-type",
                "x-Trigger": "CORS",
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();

        console.log('CREATE USER RESPONSE:', userResponse);
        return userResponse;
    }

    const createUser = async () => {
        const createResponse = await create()
        console.log("CREATED USER:", createResponse);
    }

    if(!user){
        return (
            <Layout>
    
                <h1 className='App-header'>Workout Mania</h1>
                <br />
    
                <div className='App-logo'><FaDumbbell /></div>
                <br />
                <br />
    
                <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box width="100%" maxWidth="100%" sx={{
                        background: '#003049',
                        borderRadius: '8px',
                        alignItems: 'center'
                    }}>
                        <h4 className='App-Sub'>Become a Workout-Mania User</h4>
    
    
                        <Container style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box maxWidth="100%" sx={{
                                background: '#003049',
                                borderRadius: '8px',
                                alignItems: 'center'
                            }}>
                                <input className='App-Inputs' type="text" placeholder="First Name" onChange={(e) => {
                                    setFirstName(e.target.value);
                                }} />
    
                                <br />
    
                                <input className='App-Inputs' type="text" placeholder="Last Name" onChange={(e) => {
                                    setLastName(e.target.value);
                                }} />
    
                                <br />
    
                                <input className='App-Inputs' type="text" placeholder="User Name" onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
    
                                <br />
    
                                <input className='App-Inputs' type="text" placeholder="Email" onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
    
                                <br />
    
                                <input className='App-Inputs' type="text" placeholder="Password" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
    
                                <br />
    
                                <button className='App-button' onClick={async () => {
                                    window.localStorage.setItem("users", JSON.stringify({
                                        firstName,
                                        lastName,
                                        username,
                                        email,
                                        password
                                    }));
    
                                    createUser();
                                    setTimeout(() => {
                                        navigate(`/login`);
                                    }, 500);
    
                                }}>Submit</button>
                            </Box>
                        </Container>
    
                    </Box>
                </Container>
    
    
            </Layout>
    )
    }

    if(user) {
        return(
            <Layout>
                <h1>404</h1>
            </Layout>
        )
    };
    
    
}
export default SignUp; 