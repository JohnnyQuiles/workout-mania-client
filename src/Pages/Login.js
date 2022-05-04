import { useNavigate, Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import UsersLogin from '../Components/UserLogin';

function Login() {
    const navigate = useNavigate();

    return (
        <div className='login-page'>
            <NavBar />

            <h1>Workout Mania Login Page</h1>
            <main style={{ padding: "1rem 0" }}>
                <div className='login'>
                    <UsersLogin />

                    <button onClick={async () => {
                        console.log("User login submitted");
                        navigate(`/login/loginsubmit`)
                    }}>Submit</button>
                    
                </div>
            </main>
            <Outlet />
        </div>
    )
}
export default Login; 