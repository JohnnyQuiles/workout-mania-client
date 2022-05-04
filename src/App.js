import React, { Component } from "react";
import { Outlet, Link } from 'react-router-dom';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Workout Mania!</h1>
        <br />

        <nav style={{ borderbottom: "solid 1px", paddingBottom: "1rem", }}>
          <Link to="home">Home</Link> |{" "}
          <Link to="about">About</Link> |{" "}
          <Link to="create">Sign-up</Link> |{" "}
          <Link to="login">User-login</Link>
        </nav>
        <Outlet />
      </div>
    )
  }
};

export default App;
