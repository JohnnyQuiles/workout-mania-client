import React, { Component } from "react";
import { Outlet, Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
import Login from './Pages/Login';
import './App.css';

export class App extends Component {
  render() {
    return (
      <body className='App'>
        <div>
          <h1 className='App-header'>Workout Mania</h1>
          <br />
          
          <div className='App-logo'><FaDumbbell /></div>
          <br />
          <br />
          
          <nav className='App-Nav' style={{ borderbottom: "solid 1px", paddingBottom: "1rem", }}>
            <Link className='Home' to="/">Home</Link> 
            <Link className='About' to="about">About</Link> 
            <Link className='Create' to="create">Sign-up</Link>
          </nav>
          <br />

          <h3 className='App-Sub'>Welcome to Workout Mania fitness app tracker</h3>

          <h4 className='App-Para'>Workout Mania has all you need in a fitness app tracker.
            You can login, create, and manage your own workouts.
            With Workout Mania, you can keep track of your workouts,
            we will help manage with you and also we will help by reminding you
            to keep going and reach your goals!</h4>
          <br />
          <br />

          <div className='Login'><Login /></div>
          <br />
          <br />

          <Outlet />
        </div>
      </body>
    )
  }
};

export default App;
