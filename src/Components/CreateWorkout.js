import { useState } from 'react';
import { AuthConsumer } from '../authContext';
import '../App.css';

function CreateWorkout() {
    const workoutUrl = 'http://localhost:4000/workouts';

    const [workoutName, setWorkoutName] = useState("");
    const [workoutReps, setWorkoutReps] = useState(null);
    const [workoutSets, setWorkoutSets] = useState(null);
    const [weight, setWeight] = useState([]);
    
    const create = async (authToken) => {
        const response = await fetch(`${workoutUrl}/create-workout`, {
            method: "POST",
            mode: "cors",
            headers: {
                Authorization: "Bearer " + authToken,
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

        console.log('CREATE USER RESPONSE:', userResponse);
        return userResponse;
    }

    const createWorkout = async (authToken) => {
        const workoutResponse = await create(authToken);
        console.log('CREATED WORKOUT:', workoutResponse);


    }
    return (

        <AuthConsumer>
            {({ authToken }) => (
                <div className='workout-info'>
                    <h2>Create Workout</h2>

                    <input placeholder='Workout Name' value={workoutName} onChange={(e) => {
                        setWorkoutName(e.target.value);
                    }}></input>
                    
                    <input placeholder='Workout Reps' value={workoutReps} onChange={(e) => {
                        setWorkoutReps(e.target.value);
                    }}></input>

                    <input placeholder='Workout Sets' value={workoutSets} onChange={(e) => {
                        setWorkoutSets(e.target.value);
                    }}></input>

                    <input placeholder='Weight' value={weight} onChange={(e) => {
                        setWeight(e.target.value);
                    }}></input>
                    
                    <br/>

                    <button onClick={() => {
                        console.log("create workout", authToken);
                        createWorkout(authToken)
                    }}>Create Workout</button>
                </div>

            )}
        </AuthConsumer>

    )

}
export default CreateWorkout; 