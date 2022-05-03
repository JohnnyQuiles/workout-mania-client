import React, { Component } from "react";
import { Outlet, Link } from 'react-router-dom';
import CreateUsers from './Components/CreateUsers';
import './App.css';
const usersUrl = 'http://localhost:4000/users';

async function create(name) {
  const response = await fetch(`${usersUrl}/create-user`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },
    body: JSON.stringify({ name }),
  })
  console.log("RESPONSE:", response.status);
  const userResponse = await response.text();
  console.log('CREATE USER RESPONSE:', userResponse);
  return userResponse;
}
//HEROKU 
// let serverUrl = "http://localhost:8080";

// if (process.env.REACT_APP_ENVIRONMENT === "production") {
//   console.log("in prod");
//   serverUrl = "https://final-workoutserver.herokuapp.com/";
// } else if (process.env.REACT_APP_ENVIRONMENT === "development") {
//   // console.log("in dev");
//   serverUrl = "http://localhost:4000";
// };

// const handleClickMe = async () => {
//   const response = await fetch(`${serverUrl}`);
//   const data = await response.json();
//   console.log("front end data: ", data);
//   return data;
// };

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    }
  }
  handleFirstName = (event) => {
    this.setState({ firstName: event.target.value })
  }
  handleLastName = (event) => {
    this.setState({ lastName: event.target.value })
  }
  handleUserName = (event) => {
    this.setState({ userName: event.target.value })
  }
  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  handlePassword = (event) => {
    this.setState({ password: event.target.value })
  }
  createUser = async () => {
    const createResponse = await create(this.state.name)
    console.log("CREATED USER:", createResponse);
  }
  render() {
    // const [message, setMessage] = useState("before");
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

        <div className="Inputs-Components">
          <CreateUsers />
        </div>
        
        <Outlet />

      </div>

    )
  }
};

export default App;
