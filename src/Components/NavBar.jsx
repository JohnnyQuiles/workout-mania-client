import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import '../App.css';

function NavBar() {
    const user = useSelector((state) => state.user);

    if (!user) {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className='App-Nav' style={{ background: '#e63946', display: 'flex', justifyContent: 'space-between' }}>
                        <Link className='AppWM' style={{ fontSize: '35px', textDecoration: 'none' }} to="/">WM</Link>
                        <Link className='About' to="/about">About</Link>
                        <Link className='Create' to="/create">Sign-up</Link>
                        <Link className='Create' to="/login"><AccountCircle style={{ fontSize: '35px' }}></AccountCircle></Link>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }

    if (user) {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className='App-Nav' style={{ background: '#e63946', display: 'flex', justifyContent: 'space-between' }}>
                        <Link className='App-header' style={{ color: 'white', fontSize: '35px', textDecoration: 'none' }} to="/">WM</Link>
                        <Link className='About' to="about">About</Link>
                        <Link className='Create' to="create">Sign-up</Link>
                        <Link className='Create' to="/">Logout</Link>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
};

export default NavBar; 