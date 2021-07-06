const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    excercise: [
        {
            type: {
            type: String,
            trim: true,
            },
        name: {
            type: String,
            trim: true,
            requried: true,
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



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;