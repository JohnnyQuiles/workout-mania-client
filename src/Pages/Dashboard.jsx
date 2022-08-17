import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import AddWorkout from '../Components/AddWorkout';
import '../App.css';

function Dashboard() {
    const user = useSelector((state) => state.user);
    if (user) {

        return (
            <Container>
                <h3 className="App-Sub">Welcome To Your Dashboard</h3>
                <h1 className="App-header">{user.username}</h1>

                {/* Creates workout with card to be displayed */}
                
                <AddWorkout />
                
            </Container>
        )
    }
}
export default Dashboard;
