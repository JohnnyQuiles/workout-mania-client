import NavBar from '../Components/NavBar';
import '../../src/App.css';

function About() {
    return (
        <div className="about-page">
            <NavBar />
            <h1>About Workout Mania</h1>
            
            <p>Workout-mania is your fitness app tracker on keeping track of your workouts
                through out the weeks of your training.Whether you are bulking, leaning or
                conditioning.Workout-mania keeps track of your workouts with a touch of
                button at your convenience!</p>
        </div>
    )
}
export default About;