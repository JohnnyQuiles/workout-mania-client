import React, { useState } from 'react';
import { Box } from '@mui/material';
import '../App.css';

const AddWorkout = ({ handleWorkoutCard }) => {

    const [workoutName, setWorkoutName] = useState("");
    const [workoutSets, setWorkoutSets] = useState("");
    const [workoutReps, setWorkoutReps] = useState("");
    const [workoutWeight, setWorkoutWeight] = useState("");

    const handleName = (e) => {
        setWorkoutName(e.target.value);
    };

    const handleSets = (e) => {
        setWorkoutSets(e.target.value);
    };

    const handleReps = (e) => {
        setWorkoutReps(e.target.value);
    };

    const handleWeight = (e) => {
        setWorkoutWeight(e.target.value);
    };

    const saveClick = () => {
        handleWorkoutCard(
            workoutName, 
            workoutSets, 
            workoutReps, 
            workoutWeight
            );
        setWorkoutName('');
        setWorkoutSets('');
        setWorkoutReps('');
        setWorkoutWeight('');
    }


    return (
        <div>
            <Box style={{ background: 'white', width: '100%', textAlign: 'center' }} >

                <h2 className='App-Para'>Create Workout</h2>
                    <br />

                    <input placeholder='Name' value={workoutName} onChange={handleName} className='App-Para' />

                    <br />

                    <input placeholder="Sets" value={workoutSets} onChange={handleSets} className='App-Para' />

                    <br />

                    <input placeholder="Reps" value={workoutReps} onChange={handleReps} className='App-Para' />

                    <br />

                    <input placeholder="Weight" value={workoutWeight} onChange={handleWeight} className='App-Para' />

                    <br />

                    <button className='App-button' onClick={saveClick}>
                        Create Workout
                    </button >


                <br />
                <br />


            </Box >


        </div>
    );
};

export default AddWorkout; 