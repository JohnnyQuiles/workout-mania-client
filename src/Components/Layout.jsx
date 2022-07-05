import React from 'react';
import { Box } from '@mui/material';
import NavBar from './NavBar';

function Layout(props) {
    const { children } = props;

    return (
        <Box maxWidth="100%">
            <NavBar />
            
            <div>{children}</div>
        </Box>
    )
};

export default Layout;


