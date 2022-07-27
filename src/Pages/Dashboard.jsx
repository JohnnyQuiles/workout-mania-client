import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Card, Container, Input } from '@mui/material';
import Layout from '../Components/Layout'
import CreateWorkout from '../Components/CreateWorkout';
import '../App.css';

function Dashboard() {
    const user = useSelector((state) => state.user);

    if (user) {

        return (

            <Container>
                <h3 className="App-Sub">Welcome To Your Dashboard</h3>
                <h1 className="App-header">{user.username}</h1>

                <CreateWorkout />
            </Container>

        )
    }
}
export default Dashboard;
