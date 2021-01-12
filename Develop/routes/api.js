const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    });
});

router.put("/api/workouts/:id", ({ body, params}, res) => {
    console.log(body);
    Workout.findOneAndUpdate({_id: params.id}, { 
        $push: { exercises: body } }, 
        { new: true })
    .then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})


module.exports = router;