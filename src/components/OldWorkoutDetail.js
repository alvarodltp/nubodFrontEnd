import React from 'react'

class OldWorkoutDetail extends React.Component {



  render(){
  let oldWorkout = this.props.selectedWorkoutHistory
    return(
      <div>
        {oldWorkout.exercises.map(exercise =>
          <div>
            <h1>{exercise.name}</h1>
            <p>{oldWorkout.exercise_sets.find(set => set.exercise_id === exercise.id).reps}</p>
          </div>)}
      </div>
    )
  }
}

export default OldWorkoutDetail
