import { FaDumbbell } from 'react-icons/fa';
import '../App.css';

function About() {
    return (
        <body className='App'>
            <div>
                <h1 className='App-header'>Workout Mania</h1>
                <br />

                <div className='App-logo'><FaDumbbell /></div>
                <br />
                <br />

                <h3 className="App-Sub">About Workout Mania</h3>
                <p className='App-Para'>Workout-mania is your fitness app tracker on keeping track of your workouts
                    through out the weeks of your training.Whether you are bulking, leaning or
                    conditioning.Workout-mania keeps track of your workouts with a touch of
                    button at your convenience!</p>
                <br />
            </div>
        </body>
    )
}
export default About;