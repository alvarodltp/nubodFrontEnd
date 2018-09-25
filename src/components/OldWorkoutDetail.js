import React from 'react'

class OldWorkoutDetail extends React.Component {
  render(){
  let oldWorkout = this.props.selectedWorkoutHistory
    return(
      <div id="old-workout-details">
        {oldWorkout.exercises.map(exercise =>
          <div>
            <h2>{exercise.name}</h2>
            <p>{oldWorkout.exercise_sets.find(set => set.exercise_id === exercise.id).id}</p>
            <p>Reps: {oldWorkout.exercise_sets.find(set => set.exercise_id === exercise.id).reps}</p>
            <p>Weight: {oldWorkout.exercise_sets.find(set => set.exercise_id === exercise.id).weight}</p>



          </div>)}
      </div>
    )
  }
}

export default OldWorkoutDetail
