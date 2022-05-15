import { useState, Outlet } from 'react';
import { AuthConsumer } from '../authContext';

function GetAllWorkouts() {
    const workoutUrl = 'http://localhost:4000/workouts';
    const [allWorkouts, setAllWorkouts] = useState([]);

    const getWorkout = async (authToken) => {
        const response = await fetch(`${workoutUrl}/get-all-workouts`, {
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: "Bearer" + authToken,
            }
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();

        console.log("CREATE USER RESPONSE:", userResponse);
        return userResponse;
    }
    const getAllWorkouts = async (authToken) => {
        const workoutsResponse = await getWorkout(authToken);
        console.log("Get Workout:", workoutsResponse);
    }
    return (
        <AuthConsumer>
            {({ authToken }) => (
                <div className='workoutsHistory'>
                    <h3>All Your Workouts</h3>
                    <ul>
                        <li value={allWorkouts} onChange={(e) => {
                            setAllWorkouts(e.target.value);
                        }}></li>
                    </ul>
                    <button onClick={(e) => {
                        e.preventDefault();
                        console.log('get all workouts:', authToken)
                        getAllWorkouts(authToken)
                    }}>Submit</button>
                    <Outlet />
                </div>
            )}
        </AuthConsumer>
    )

}
export default GetAllWorkouts;