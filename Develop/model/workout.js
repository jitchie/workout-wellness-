const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
            },
            name: {
                type: String,
                trim: true,
                required: true,
                minLength: 1,
            },
            duration: {
                type: Number,
                minutes: 1,
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        },
    ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;