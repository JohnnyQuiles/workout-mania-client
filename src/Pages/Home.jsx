import React from 'react';
import Layout from '../Components/Layout';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

const Home = () => {
    const user = useSelector((state) => state.user);

    if (!user) {

        return (
            <Layout>
                <Container>
                    
                    <h3 className='App-Sub'>Welcome to Workout Mania fitness app tracker</h3>

                    <h4 className='App-Para'>Workout Mania has all you need in a fitness app tracker.
                        You can login, create, and manage your own workouts.
                        With Workout Mania, you can keep track of your workouts,
                        we will help manage with you and also we will help by reminding you
                        to keep going and reach your goals!</h4>

                    <br />
                    <br />

                </Container>
            </Layout>
        );
    };

    if (user) {
        return (
            <Layout>
                <Container>
                    
                    <br />
                    <br />

                    <h3 className='App-Sub'>Welcome to Workout Mania fitness app tracker</h3>

                    <h2 className='App-Para'>Workout Mania has all you need in a fitness app tracker.
                        You can login, create, and manage your own workouts.
                        With Workout Mania, you can keep track of your workouts,
                        we will help manage with you and also we will help by reminding you
                        to keep going and reach your goals!</h2>

                    <br />
                    <br />

                </Container>
            </Layout>
        )
    }
}

export default Home;

