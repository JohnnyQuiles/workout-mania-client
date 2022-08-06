import React, { useState } from 'react';
import { Box, Card, Input } from '@mui/material';
import '../App.css';

function CreateWorkout() {

    // For inputs
    const [workoutName, setWorkoutName] = useState("");
    const [workoutSets, setWorkoutSets] = useState(null);
    const [workoutReps, setWorkoutReps] = useState(null);
    const [workoutWeight, setWorkoutWeight] = useState(null);

    // For Displaying Card
    const [workoutCard, setWorkoutCard] = useState("");

    // API =======================================================
    const workoutUrl = 'http://localhost:5017/workouts';

    const create = async () => {
        const response = await fetch(`${workoutUrl}/create`, {
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
                workoutSets: workoutSets,
                workoutReps: workoutReps,
                workoutWeight: workoutWeight,
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();
        return userResponse;
    };

    const createWorkout = async () => {
        const workoutResponse = await create()
        return setWorkoutCard(workoutResponse.data);
        
    };

    return (
        <Box style={{ background: 'white', width: '100%', textAlign: 'center' }} >

            <h2 className='App-Para'>Create Workout</h2>

            <Input placeholder='Workout Name' value={workoutName} onChange={(e) => {
                setWorkoutName(e.target.value);
            }} />

            <br />

            <Input placeholder='Workout Sets' value={workoutSets} onChange={(e) => {
                setWorkoutSets(e.target.value);
            }} />

            <br />

            <Input placeholder='Workout Reps' value={workoutReps} onChange={(e) => {
                setWorkoutReps(e.target.value);
            }} />

            <br />

            <Input placeholder='Weight' value={workoutWeight} onChange={(e) => {
                setWorkoutWeight(e.target.value);
            }} />

            <br />

            <button className='App-button' onClick={() => {
                createWorkout()
            }}>Create Workout</button>

            <br />
            <br />
            <p>

            {createWorkout.workoutName}
            </p>
        </Box >
    );


}
export default CreateWorkout; 