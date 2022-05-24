import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    return (
        <body className='App'>
            <div>
                <nav className='App-Nav' style={{ borderbottom: "solid 1px", paddingBottom: "1rem", }}>
                    <Link className='Home' to="/">Home</Link>
                    <Link className='About' to="/about">About</Link>
                    <Link className='Create' to="/create">Sign-up</Link>
                    <Link className='Create' to="/login">Login</Link>
                </nav>
            </div>
        </body>
    )
}
export default NavBar; 