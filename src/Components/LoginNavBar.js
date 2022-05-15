import { Link } from 'react-router-dom';

function LoginNavBar() {
    return (
        <div>
            <Link to="/">Home</Link> | {" "}
            <Link to='/about'></Link> | {" "}
            <Link to='/signout'></Link> |
        </div>
    )
}
export default LoginNavBar;