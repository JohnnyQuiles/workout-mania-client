import React from 'react';
import WorkoutCard from './WorkoutCard';
import AddWorkout from './AddWorkout';
import { Box } from '@mui/material';

const WorkoutCards =({ cards, handleAddWorkout }) => {
    return(
        <div>
            <AddWorkout handleAddWorkout={handleAddWorkout} />
            
            <br />

            {cards?.map((card) => (
                <WorkoutCard 
                workoutName={card.workoutName}
                workoutSets={card.workoutSets}
                workoutReps={card.workoutReps}
                workoutWeight={card.workoutWeight}
                
                />
            ))}
        </div>
    )
};
export default WorkoutCards;