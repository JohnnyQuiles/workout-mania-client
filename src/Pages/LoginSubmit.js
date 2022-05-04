import CreateWorkout from '../Components/CreateWorkout';
function LoginSubmitted() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <div className="LoginSubmitted">
                <h2>User Login Successfully!</h2>
                <br />
                
                <h4>Create your workout!</h4>
                <CreateWorkout />
            </div>
        </main>
    )
}
export default LoginSubmitted; 
