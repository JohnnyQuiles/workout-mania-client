import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
import Layout from '../Components/Layout';
import { Container } from '@mui/material';

const Home = () => {
    return (
        <Layout>
            <Container>

            <h1 className='App-header'>Workout Mania</h1>
            <div className='App-logo'><FaDumbbell /></div>

            <br />
            <br />

            <h3 className='App-Sub'>Welcome to Workout Mania fitness app tracker</h3>

            <h4 className='App-Para'>Workout Mania has all you need in a fitness app tracker.
                You can login, create, and manage your own workouts.
                With Workout Mania, you can keep track of your workouts,
                we will help manage with you and also we will help by reminding you
                to keep going and reach your goals!</h4>

            <br />
            <br />

            <Outlet />
            </Container>
        </Layout>
    )
}

export default Home;

