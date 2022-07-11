import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

function Dashboard() {
    const user = useSelector((state) => state.user);

    if (user) {

        return (
       

                <div className="container">
                    <h3 className="App-Sub">Welcome To Your Dashboard</h3>
                    <h1 className='App-header'>Hi</h1>

                    <h1 className="App-header">{user.username}</h1>



                </div>




        )
    }
}
export default Dashboard;
