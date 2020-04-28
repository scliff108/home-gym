import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import exerciseData from './../exerciseData';
import Exercise from './Exercise';

class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageshow: false,
    };
  }
  render() {
    const exercises = exerciseData.exercises.map((exercise, idx) => {
      return <Exercise {...exercise} key={idx} imageshow={this.state.imageshow} />;
    });
    return (
      <>
      <Jumbotron>
        <h1>At Home Exercises</h1>
        <p className="lead">Here are some exercises with little or no equipment.</p>
        <Button 
          variant="success"
          size="lg"
          onClick={() => this.setState({imageshow: !this.state.imageshow})}
        >
          {this.state.imageshow ? "Hide Images" : "Show Images"}
        </Button>
      </Jumbotron>
      <CardColumns>
        {exercises}
      </CardColumns>
      </>
    );
  }
}

export default Exercises;
        