import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link> | {" "}
            <Link to="/about">About</Link> | {" "}
            <Link to="/create">Sign-up</Link>
        </div>
    )
}
export default NavBar; 