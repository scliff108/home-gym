import React from 'react';
import exerciseData from './../exerciseData';
import Exercise from './Exercise';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Accordion from 'react-bootstrap/Accordion';

const Workout = (props) => {

  const exercises = props.exercises.map(exercise => {
    return exercise;
  });

  var exerciseCards = exercises.map((exercise, idx) => {
    const e = exerciseData.exercises.find(obj => obj.exercise === exercise);
    return (
      <Exercise {...e} key={idx} />
    );
  });

  return (
    <>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={props.eventkey}>
          {props.workout}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={props.eventkey}>
        <CardDeck>
          {exerciseCards}
        </CardDeck>
      </Accordion.Collapse>
    </Card>
    </>
  );
}

export default Workout;