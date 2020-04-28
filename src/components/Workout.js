import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import GymModal from './GymModal';

const Workout = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const exercises = props.exercises.map((exercise, idx) => {
    return <p>{exercise}</p>;
  });
  return (
    <>
    <h2>{props.workout}</h2>
    <div>{exercises}</div>
    </>
  );
}

export default Workout;