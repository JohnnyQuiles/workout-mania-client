import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';
import '../App.css';

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='App-Nav' style={{ background: '#e63946' }}>
                    <Link className='App-header' style={{ color: 'white', fontSize: '35px', textDecoration: 'none' }} to="/">WM</Link>
                    {/* <Link className='Home' to="/">Home</Link> */}
                    <Link className='About' to="/about">About</Link>
                    <Link className='Create' to="/create">Sign-up</Link>
                    <Link className='Create' to="/login">Login</Link>
                </Toolbar>
            </AppBar>
        </Box>

    )
};

export default NavBar; 