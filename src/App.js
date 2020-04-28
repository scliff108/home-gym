import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import exerciseData from './exerciseData';
import Exercise from './components/Exercise';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageshow: false
    };
  }

  render() {
    const exercises = exerciseData.exercises.map((exercise, idx) => {
      return <Exercise {...exercise} key={idx} imageshow={this.state.imageshow} />;
    });

    return (
      <Container fluid>
        <Jumbotron>
          <h1>Welcome to The At Home Workout Center</h1>
          <p className="lead">Browse through body weight exercises and workouts. Find your favorites and keep yourself in shape from anywhere.</p>
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
      </Container>
    );
  }
}

export default App;
