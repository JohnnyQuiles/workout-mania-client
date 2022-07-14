import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import workoutReducer from './workoutSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        workouts: workoutReducer
    },
});