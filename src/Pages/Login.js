import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { AuthConsumer } from '../authContext';
import '../App.css';

function Login() {
    const usersUrl = 'http://localhost:4000/users';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        const response = await fetch(`${usersUrl}/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "acces-control-request-headers": "content-type",
                "x-Trigger": "CORS",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();
        return userResponse;
    }

    const userLogin = async () => {
        const loginResponse = await login();
        console.log("Login user:", loginResponse);
        return loginResponse.payload;

    }

    return (
        <AuthConsumer>
            {({ authToken, setAuthToken }) => (
                <div className='user-login'>
                    
                    <h3>Have an existing account?</h3>

                    <input type='text' placeholder='Email' onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>

                    <br />

                    <input type='text' placeholder='Password' onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>

                    <br />

                    <button onClick={async () => {
                        alert('Login Successfully')
                        console.log('User login');
                        const newAuth = await userLogin(authToken);
                        setAuthToken(newAuth);
                        navigate(`/dashboard`);
                    }}>login</button>
                    <Outlet />
                </div>
            )}
        </AuthConsumer>
    )


}
export default Login; 
