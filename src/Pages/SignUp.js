import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
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
        <body className='App'>
            <div>
                <h1 className='App-header'>Workout Mania</h1>
                <br />

                <div className='App-logo'><FaDumbbell /></div>
                <br />
                <br />

                <h4 className='App-Sub'>Become a Workout-Mania User</h4>
                <NavBar />

                <input className='App-Inputs' type="text" placeholder="First Name" onChange={(e) => {
                    setFirstName(e.target.value);
                }}></input>

                <br />

                <input className='App-Inputs' type="text" placeholder="Last Name" onChange={(e) => {
                    setLastName(e.target.value);
                }}></input>

                <br />

                <input className='App-Inputs' type="text" placeholder="User Name" onChange={(e) => {
                    setUsername(e.target.value);
                }}></input>

                <br />

                <input className='App-Inputs' type="text" placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value);
                }}></input>

                <br />

                <input className='App-Inputs' type="text" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }}></input>

                <br />

                <button className='App-button' onClick={async () => {
                    window.localStorage.setItem("users", JSON.stringify({
                        firstName,
                        lastName,
                        username,
                        email,
                        password
                    }));
                    alert("User Created Sucessfully")
                    createUser();
                    setTimeout(() => {
                        navigate(`/login`);
                    }, 500);

                }}>Submit</button>
                <Outlet />
            </div>
        </body>
    )
}
export default SignUp; 