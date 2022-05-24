import { Link } from 'react-router-dom';

function LoginNavBar() {
    return (
        <div>
            <Link to="/">Home</Link> | {" "}
            <Link to='/about'>About</Link> | {" "}
            <Link to='/logout'>Logout</Link>
        </div>
    )
}
export default LoginNavBar;