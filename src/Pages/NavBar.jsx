import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, AccountCircle, Box, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import '../App.css';

function NavBar() {
    const user = useSelector((state) => state.user);

    if (!user) {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className='App-Nav' style={{ background: '#e63946' }}>
                        <Link className='App-header' style={{ color: 'white', fontSize: '35px', textDecoration: 'none' }} to="/">WM</Link>
                        <Link className='About' to="about">About</Link>
                        <Link className='Create' to="create">Sign-up</Link>
                        <Link className='Create' to="login"><AccountCircle sx={{ color: 'white', fontSize: '35px' }}></AccountCircle></Link>
                    </Toolbar>
                </AppBar>
            </Box>

        )
    }

    if (user) {
        const userData = user.payload;
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className='App-Nav' style={{ background: '#e63946' }}>
                        <Link className='App-header' style={{ color: 'white', fontSize: '35px', textDecoration: 'none' }} to="/">WM</Link>
                        <Link className='Home' to="dashboard">dash</Link>
                        <Link className='About' to="about">About</Link>
                        <Link className='Create' to="create">Sign-up</Link>
                        <Link to='login' style={{ textDecoration: 'none', color: '#86C5FF' }}>
                        {
                            user
                                ? `${userData.username}`
                                : (
                                    <AccountCircle sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: 'white', fontSize: '35px' }}></AccountCircle>
                                )
                        }
                    </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
};

export default NavBar; 