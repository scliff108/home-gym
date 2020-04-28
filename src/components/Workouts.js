import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion';
import exerciseData from './../exerciseData';
import Workout from './Workout';

const Workouts = () => {

  const workouts = exerciseData.workouts.map((workout, idx) => {
    return <Workout {...workout} key={idx} eventkey={idx} />;
  });

  return (
    <>
    <Jumbotron>
      <h1>At Home Workouts</h1>
      <p className="lead">Here are some pre-built workouts with little or no equipment.</p>
    </Jumbotron>
    <Accordion>
      {workouts}
    </Accordion>
    </>
  );
}

export default Workouts;
        