import React, { useState } from 'react';
import { Box, Card } from '@mui/material';

// Style of Workout Card
const WorkoutCard = ({ workoutName, workoutSets, workoutReps, workoutWeight }) => {
    return (
        <div>
            <Box maxWidth="50%" style={{ background: 'white', color: 'black', textAlign: 'center', borderRadius: '5px' }}>
                <h1>Saved Workout</h1>
                <Card style={{ background: 'crimson', color: 'white' }}>
                    <ul style={{ listStyle: 'none' }}>
                        <li>{workoutName}</li>
                        <li>{workoutSets}</li>
                        <li>{workoutReps}</li>
                        <li>{workoutWeight}</li>
                    </ul>
                </Card>
            </Box>
        </div>
    )

};


export default WorkoutCard;
