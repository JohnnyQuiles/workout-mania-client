import React, { Component } from 'react';
const workoutUrl = 'http://localhost:4000/workouts';

export class CreateWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutName: "",
            workoutReps: null,
            workoutSets: null,
            weight: []
        };
    }
    create = async () => {
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
                workoutName: this.state.workoutName,
                workoutReps: this.state.workoutReps,
                workoutSets: this.state.workoutSets,
                weight: this.state.weight
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();

        console.log('CREATE USER RESPONSE:', userResponse);
        return userResponse;
    }
    handleWorkoutName = (event) => {
        this.setState({ workoutName: event.target.value });
    }
    handleWorkoutReps = (event) => {
        this.setState({ workoutReps: event.target.value });
    }
    handleWorkoutSets = (event) => {
        this.setState({ workoutSets: event.target.value });
    }
    handleWeight = (event) => {
        this.setState({ weight: event.target.value });
    }
    createWorkout = async () => {
        const workoutResponse = await this.create();
        console.log('CREATED WORKOUT:', workoutResponse);
    }

    render() {
        return (
            <div>
                <h2>Create Workout</h2>
                <div className='workout-info'>
                    <div className='inputs'>
                        <input placeholder='Workout Name' value={this.state.workoutName} onChange={this.handleWorkoutName} />
                        <input placeholder='Workout Reps' value={this.state.workoutReps} onChange={this.handleWorkoutReps} />
                        <input placeholder='Workout Sets' value={this.state.workoutSets} onChange={this.handleWorkoutSets} />
                        <input placeholder='Weight' value={this.state.weight} onChange={this.handleWeight} />
                    </div>
                    <button onClick={this.createWorkout}>Create Workout</button>
                </div>
            </div>
        )
    }
}
export default CreateWorkout; 