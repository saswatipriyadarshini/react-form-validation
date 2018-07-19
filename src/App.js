import React, { Component } from 'react';
import './App.css';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FormElement from './FormElement';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form>
          <FormElement
            type='text'
            id='email'
            className='form-control'
            placeholder='This is a placeholder'
            inputname='email'
            name='Saswati'
            value={this.state.user_details}
            changeHandler={this.changeHandler}
            error={this.state.user_details.errors}
          />
        </Form>
      </div>
    );
  }
}

export default App;
