import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import Layout from '../Components/Layout';
import { useSelector } from 'react-redux';

import '../App.css';

function About() {
    const user = useSelector((state) => state.user);

    if(!user){
        return (
            <Layout>
    
                <div>
    
                    <h3 className="App-Sub">About Workout Mania</h3>
                    <p className='App-Para'>Workout-mania is your fitness app tracker on keeping track of your workouts
                        through out the weeks of your training.Whether you are bulking, leaning or
                        conditioning.Workout-mania keeps track of your workouts with a touch of
                        button at your convenience!</p>
                    <br />
                </div>
            </Layout>
            
        )
    };

    if (user) {
        return (
            <Layout>
    
                <div>
    
                    <h3 className="App-Sub">About Workout Mania</h3>
                    <p className='App-Para'>Workout-mania is your fitness app tracker on keeping track of your workouts
                        through out the weeks of your training.Whether you are bulking, leaning or
                        conditioning.Workout-mania keeps track of your workouts with a touch of
                        button at your convenience!</p>
                    <br />
                </div>
            </Layout>
            
        )
    }
}
export default About;