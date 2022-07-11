import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { Box } from '@mui/material';
import NavBar from './NavBar';

function Layout(props) {
    const { children } = props;

    return (
        <Box maxWidth="100%">
            <NavBar />

            <h1 className='App-header'>Workout Mania</h1>
            <br />

            <div className='App-logo'><FaDumbbell /></div>
            <br />
            <br />
            
            <div>
                {children}
            </div>
        </Box>
    )
};

export default Layout;


