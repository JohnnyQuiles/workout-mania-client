import GetAllWorkouts from '../Components/GetAllWorkouts';

function getAllWorkouts() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <div className='allWorkouts'>
                <h2>All Workouts</h2>
                <br />
                <GetAllWorkouts />
            </div>
        </main>
    )
}
export default getAllWorkouts;