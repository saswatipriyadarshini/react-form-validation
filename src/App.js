import React, { Component } from 'react';
import './App.css';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FormClass from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormClass />
      </div>
    );
  }
}

export default App;
