import { Link } from 'react-router-dom';

function LoginNavBar() {
    return (
        <nav className='App-Nav' style={{ borderbottom: "solid 1px", paddingBottom: "1rem", }}>
            <Link className='Home' to="/">Home</Link> | {" "}
            <Link className='About'to='/about'>About</Link> | {" "}
            <Link className='Create'to='/logout'>Logout</Link>
        </nav>
    )
}
export default LoginNavBar;