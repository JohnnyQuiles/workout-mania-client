import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const CreateUser = () => {
    const [firstName, setFirstName] = useState('');
    const navigate = useNavigate();

    return (
        <main style={{ padding: "1rem 0" }}>
            <div className="User">
                <input type="text" value={firstName} placeholder="First Name" onChange={(e) => {
                    setFirstName(e.target.value);
                }}></input>

                <button onClick={async (e) => {
                    console.log('Created User Submitted');
                    setFirstName(e.target.value);
                    navigate(`/create/submitted`);

                }}>Submit</button>
                <Outlet />
            </div>
        </main>
    )
}
export default CreateUser; 