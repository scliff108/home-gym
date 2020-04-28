import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageshow: false
    };
  }

  render() {
    return (
      <Container fluid>
        <Navigation />
      </Container>
    );
  }
}

export default App;
