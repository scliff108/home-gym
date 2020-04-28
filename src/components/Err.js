import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Link from 'react-router-dom/Link';

const Err = () => {
  return (
    <>
    <Jumbotron>
      <h1>404</h1>
      <p className="lead">This page was not found.</p>
      <Button as={Link} to="/" className="lg mr-1">Home</Button>
      <Button as={Link} to="/exercises" variant="success" className="lg mx-1">Exercises</Button>
      <Button as={Link} to="/workouts" variant="info" className="lg mx-1">Workouts</Button>
    </Jumbotron>
    </>
  );
}

export default Err;