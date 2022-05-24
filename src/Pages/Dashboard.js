import CreateWorkout from '../Components/CreateWorkout';
import LoginNav from '../Components/LoginNavBar';
function DashWorkouts() {
    return (
        <div className="container">
            <LoginNav />

            <h3>Welcome To Your Dashboard</h3>
            <CreateWorkout />
        </div>
    )
}
export default DashWorkouts; 