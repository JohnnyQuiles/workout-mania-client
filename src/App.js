import { useState } from "react";
import './App.css';
let serverUrl = "http://localhost:8080";

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  console.log("in prod");
  serverUrl = "https://final-workoutserver.herokuapp.com/";
} else if (process.env.REACT_APP_ENVIRONMENT === "development") {
  // console.log("in dev");
  serverUrl = "http://localhost:4000";
}

const handleClickMe = async () => {
  const response = await fetch(`${serverUrl}`);
  const data = await response.json();
  console.log("front end data: ", data);
  return data;
};
function App () {  
  const [message, setMessage] = useState("before");
    return (
      <div>
        <h1>Workout-Mania! </h1>
        {message}
        <button
          onClick={async () => {
            const fetchedMessage = await handleClickMe();
            console.log("fetchedMessage ", fetchedMessage)
            setMessage(fetchedMessage.message)
          }}
        >
          Click me!
        </button>
      </div>
    )

}

export default App;

