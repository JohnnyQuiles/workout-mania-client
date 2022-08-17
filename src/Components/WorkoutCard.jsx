import React, { useState } from 'react';
import AddWorkout from './AddWorkout';
import { Card } from '@mui/material';

// Style of Workout Card
const WorkoutCard = ({ workoutName, workoutSets, workoutReps, workoutWeight }) => {
    const [card, setCard] = useState([]);

    const addCard = (workoutName, workoutSets, workoutReps, workoutWeight) => {
        
        const newCard = {
            workoutName: workoutName,
            workoutSets: workoutSets,
            workoutReps: workoutReps,
            workoutWeight: workoutWeight
        };
        const newCards = [...card, newCard];
        setCard(newCards);
    };

    if (AddWorkout) {
        return (
            <div>
                <Card sx={{ maxWidth: '30%', background: 'white', color: 'black' }}>
                    <h3>Workout Card</h3>
                    <ol>
                        <li>{workoutName}</li>
                        <li>{workoutSets}</li>
                        <li>{workoutReps}</li>
                        <li>{workoutWeight}</li>
                    </ol>
                </Card>
            </div>
        )

    };

};

export default WorkoutCard;
