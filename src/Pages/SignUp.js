import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';


function SignUp() {
    const usersUrl = 'http://localhost:4000/users';
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const create = async () => {
        const response = await fetch(`${usersUrl}/create-user`, {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "access-control-request-headers": "content-type",
                "x-Trigger": "CORS",
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password
            }),
        })
        console.log("RESPONSE:", response.status);
        const userResponse = await response.json();

        console.log('CREATE USER RESPONSE:', userResponse);
        return userResponse;
    }

    const createUser = async () => {
        const createResponse = await create()
        console.log("CREATED USER:", createResponse);
    }
    return (
        <div className='create-page'>
            <NavBar />
            <h1>Workout Mania SignUp Page</h1>
            
            <input type="text" placeholder="First Name" onChange={(e) => {
                setFirstName(e.target.value);
            }}></input>
            
            <input type="text" placeholder="Last Name" onChange={(e) => {
                setLastName(e.target.value);
            }}></input>
            
            <input type="text" placeholder="User Name" onChange={(e) => {
                setUsername(e.target.value);
            }}></input>
            
            <input type="text" placeholder="Email" onChange={(e) => {
                setEmail(e.target.value);
            }}></input>
            
            <input type="text" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value);
            }}></input>
            
            <br />
            
            <button onClick={async () => {
                console.log('Created User Submitted');
                createUser();
                navigate(`/create/submitted`);
            }}>Submit</button>
            <Outlet />
        </div>
    )
}
export default SignUp; 