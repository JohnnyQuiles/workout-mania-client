import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function CreateUser() {
    let currentURL = window.location.href;
    const [searchParams, setSearchParams] = useSearchParams();

    const firstNameParam = searchParams.get("firstName");
    const lastNameParam = searchParams.get("lastName");
    const userNameParam = searchParams.get("userName");
    const emailParam = searchParams.get("email");
    const passwordParam = searchParams.get("password");

    const [firstName, setFirstName] = useState(firstNameParam || "");
    const [lastName, setLastName] = useState(lastNameParam || "");
    const [userName, setUserName] = useState(userNameParam || "");
    const [email, setEmail] = useState(emailParam || "");
    const [password, setPassword] = useState(passwordParam || "");
    const [contactURL, setContactURL] = useState(" ");

    const navigate = useNavigate();

    return (
        <main style={{ padding: "1rem 0" }}>
            <div className="User">
                <h2>Create-User</h2>

                <label>FirstName:</label>
                <input type="text" value={firstName} onChange={(e) => {
                    setFirstName(e.target.value);
                    searchParams.set("firstName", e.target.value);
                    setSearchParams(searchParams);
                }} />
                <hr />

                <label>LastName:</label>
                <input type="text" value={lastName} onChange={(e) => {
                    setLastName(e.target.value);
                    searchParams.set("lastName", e.target.value);
                    setSearchParams(searchParams);
                }} />
                <hr />

                <label>UserName:</label>
                <input type="text" value={userName} onChange={(e) => {
                    setUserName(e.target.value);
                    searchParams.set("userName", e.target.value);
                    setSearchParams(searchParams);
                }} />
                <hr />

                <label>UserEmail:</label>
                <input type="text" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                    searchParams.set("email", e.target.value);
                    setSearchParams(searchParams);
                }} />
                <hr />

                <label>Password:</label>
                <input type="text" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                    searchParams.set("password", e.target.value);
                    setSearchParams(searchParams);
                }} />
                <hr />

                <button onClick={async () => {
                    console.log('Created User Submitted');
                    navigate(`/create/submitted`);
                    
                }}>Submit</button>
            </div>
            <div className='generate-url'>
                <div className="contact-url">{contactURL}</div>
                <button onClick={async () => {
                    setContactURL(currentURL);
                }}>
                    Generate URL
                </button>
            </div>
        </main>
    )
}
export default CreateUser; 