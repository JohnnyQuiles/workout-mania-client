import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function SignUp() {
    const [pin, setPin] = useState('');
    const navigate = useNavigate();

    return (
        <div className='create-page'>
            <NavBar />
            <h1>Workout Mania SignUp Page</h1>
            <input type='text' value={pin} placeholder='Create A Pin' onChange={(e) => {
                setPin(e.target.value);
            }} />
            <button onClick={async () => {
                console.log("Pin Submitted");
                navigate(`/create/createuser`);
            }}>Submit</button>
            <Outlet />
        </div>
    )
}
export default SignUp; 