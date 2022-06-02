import CreateWorkout from '../Components/CreateWorkout';
import LoginNav from '../Components/LoginNavBar';
import { FaDumbbell } from 'react-icons/fa';
import '../App.css';

function DashWorkouts() {
    return (
        <div className="App">
            <h1 className='App-header'>Workout Mania</h1>
            <br />

            <div className='App-logo'><FaDumbbell /></div>
            <br />
            <br />
            <div className="container">
                <LoginNav />

                <h3 className="App-Sub">Welcome To Your Dashboard</h3>
                <CreateWorkout />
            </div>
        </div>

    )
}
export default DashWorkouts; 