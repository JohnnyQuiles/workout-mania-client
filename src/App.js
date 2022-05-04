import React, { Component } from "react";
import { Outlet, Link } from 'react-router-dom';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Workout Mania</h1>
        <br />

        <nav style={{ borderbottom: "solid 1px", paddingBottom: "1rem", }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="about">About</Link> |{" "}
          <Link to="create">Sign-up</Link> |{" "}
          <Link to="login">User-login</Link>
        </nav>

        <h3>Welcome to Workout Mania fitness app tracker!</h3>
          <p>Workout Mania is has all you need in a fitness app tracker. 
          You can login, create, and manage your own workouts.
          With Workout Mania, we want to help you reach your goals!</p>
        
        <Outlet />
      </div>
    )
  }
};

export default App;
