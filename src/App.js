import React, { Component } from "react";
import { Outlet, Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
import Login from './Pages/Login';
import './App.css';

export class App extends Component {
  render() {
    return (
      <body>
        <div className='App'>
          <h1 className='App-header'>Workout Mania<FaDumbbell /></h1>
          <br />

          <nav style={{ borderbottom: "solid 1px", paddingBottom: "1rem", }}>
            <Link className='App-Link' to="/">Home</Link> |{" "}
            <Link className='App-Link' to="about">About</Link> |{" "}
            <Link className='App-Link' to="create">Sign-up</Link>
          </nav>

          <h3>Welcome to Workout Mania fitness app tracker</h3>

          <h4>Workout Mania has all you need in a fitness app tracker.
            You can login, create, and manage your own workouts.
            With Workout Mania, you can keep track of your workouts,
            we will help manage with you and also we will help by reminding you
            to keep going and reach your goals!</h4>
          <br />
          <br />

          <Login />
          <br />
          <br />

          <Outlet />
        </div>
      </body>
    )
  }
};

export default App;
