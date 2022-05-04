import CreateUsers from '../Components/CreateUsers';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const navigate = useNavigate();

    return (
        <main style={{ padding: "1rem 0" }}>
            <div className="User">
                <CreateUsers />

                <button onClick={async () => {
                    console.log('Created User Submitted');
                    navigate(`/create/submitted`);

                }}>Submit</button>
            </div>
        </main>
    )
}
export default CreateUser; 