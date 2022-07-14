import { createSlice }from '@reduxjs/toolkit';

export const workoutSlice = createSlice({
    name:'workouts',
    initialState: null,
    reducers: {
        create: (state, action) => state.payload.savedWorkout
    },
});

export const { create } = workoutSlice.actions;

export default workoutSlice.reducer;


