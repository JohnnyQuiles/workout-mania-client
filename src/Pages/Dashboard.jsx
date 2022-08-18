import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import AddWorkout from '../Components/AddWorkout';
import WorkoutCards from '../Components/WorkoutCards';
import '../App.css';

function Dashboard() {
    const user = useSelector((state) => state.user);
    const [cards, setCards] = useState([]);

    useEffect(() =>{
        const savedCards = JSON.parse(localStorage.getItem('workout-cards'));

        if(savedCards){
            setCards(savedCards);
        }
    }, []);

    const addCard = (workoutName, workoutSets, workoutReps, workoutWeight) => {
        const newCard = {
            workoutName: workoutName,
            workoutSets: workoutSets,
            workoutReps: workoutReps,
            workoutWeight: workoutWeight
        }
        const newCards = [...cards, newCard];
        setCards(newCards);
    }

    if (user) {

        return (
            <Container>
                <h3 className="App-Sub">Welcome To Your Dashboard</h3>
                <h1 className="App-header">{user.username}</h1>

                {/* Creates workout with card to be displayed */}
                
                <Box>
                <WorkoutCards
                handleAddWorkout={addCard}
                />
                </Box>

            </Container>
        )
    }
}
export default Dashboard;
