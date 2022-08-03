import React, { useState } from 'react';
import { Box, Card , Input } from '@mui/material';
import '../App.css';
import { useDispatch } from 'react-redux';

function CreateWorkout() {
    const workoutUrl = 'http://localhost:5017/workouts';

    const [workoutName, setWorkoutName] = useState("");
    const [workoutReps, setWorkoutReps] = useState(null);
    const [workoutSets, setWorkoutSets] = useState(null);
    const [weight, setWeight] = useState([]);

    const dispatch = useDispatch();

    // API =======================================================
    const create = async () => {
        const response = await fetch(`${workoutUrl}/create-workout`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "acces-control-request-headers": "content-type",
                "x-Trigger": "CORS",
            },
            body: JSON.stringify({
                workoutName: workoutName,
                workoutReps: workoutReps,
                workoutSets: workoutSets,
                weight: weight,
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();
        return userResponse;
    }

    const createWorkout = async () => {
        const workoutResponse = await create()
        console.log('CREATED WORKOUT:', workoutResponse);

        dispatch(create({ workout: workoutResponse }));
        return workoutResponse.payload; 

    }
    return (
                    <Box style={{ background: 'white', width: '50%'}}>
                    
                    <h2 className='App-Para'>Create Workout</h2>

                    <Input placeholder='Workout Name' value={workoutName} onChange={(e) => {
                        setWorkoutName(e.target.value);
                    }} />

                    <br />

                    <Input placeholder='Workout Reps' value={workoutReps} onChange={(e) => {
                        setWorkoutReps(e.target.value);
                    }} />

                    <br />

                    <Input placeholder='Workout Sets' value={workoutSets} onChange={(e) => {
                        setWorkoutSets(e.target.value);
                    }} />

                    <br />
                    
                    <Input placeholder='Weight' value={weight} onChange={(e) => {
                        setWeight(e.target.value);
                    }} />

                    <br />

                    <button className='App-button' onClick={() => {
                        createWorkout()
                    }}>Create Workout</button>

                    <br />
                    <br />

                    </Box>
    )
}
export default CreateWorkout; 