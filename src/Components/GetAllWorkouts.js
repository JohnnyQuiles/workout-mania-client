import React, { Component } from 'react';
import { AuthConsumer } from '../authContext';

const workoutUrl = 'http://localhost:4000/workouts';

export class GetAllWorkouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allWorkouts: [],
        };
    }
    getWorkout = async (authToken) => {
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
    getAllWorkouts = async (authToken) => {
        const workoutsResponse = await this.getWorkout(authToken);
        console.log("Get Workout:", workoutsResponse);
    }
    render() {
        return (
            <AuthConsumer>
                {({ authToken }) => (
                    <div>
                        <h3>All Your Workouts</h3>
                        <div className='workoutsHistory'>
                            <button onClick={() => {
                                console.log('get all workouts', authToken)
                                this.getAllWorkouts(authToken)
                            }}>Submit</button>

                        </div>
                    </div>
                )}
            </AuthConsumer>
        )
    }
}
export default GetAllWorkouts;