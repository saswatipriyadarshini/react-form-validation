import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormElement from './FormElement';
import './Form.css'

class FormClass extends Component {
  constructor(props){
    super(props)

    this.changeHandler = this.changeHandler.bind(this);

    this.state = {
      user_details:{
        name: '',
        email: '',
        password: '',
        errors:{
          name: '',
          email: '',
          password: ''
        }
      }
    }
  }

  changeHandler(e){
    let input = e.currentTarget;
    let input_value = input.value;
    let name = input.name;

    let new_user_details = Object.assign({}, this.state.user_details);

    new_user_details[name] = input_value;

    this.setState({user_details: new_user_details});

    console.log("New", new_user_details);
    this.validate(name);
  }

  validate(name){
    //validation for email

    if(name === 'email'){
      let email = this.state.user_details[name];

      let valid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);

      let new_user_details = Object.assign({}, this.state.user_details);

      if(valid){
        new_user_details.errors.email = "";
      } else{
        new_user_details.errors.email = "Please Enter a Valid Email Id";
      }
      this.setState({user_details: new_user_details});

      //Validation for password

    } else if(name === 'password'){
      let password = this.state.user_details[name];

      let valid_password = false;

      if(password.length >= 8){
        valid_password = true;
      }

      let new_user_details = Object.assign({}, this.state.user_details);

      if(valid_password){
        new_user_details.errors.password = '';

      }else {
        new_user_details.errors.password = "Please enter atleast 8 charactrers";
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Form className='form-elements'>
          <FormElement
            className='style-form-element'
            name='Name'
            type='text'
            id='name'
            placeholder='Type your Full Name'
            inputname='fullname'
            value={this.state.user_details.name}
            changeHandler={this.changeHandler}
            error={this.state.user_details.errors.name}
          />
          <FormElement
            className='style-form-element'
            name='Email'
            type='email'
            id='email'
            placeholder='Enter Your Email'
            inputname='email'
            value={this.state.user_details.email}
            changeHandler={this.changeHandler}
            error={this.state.user_details.errors.email}
          />
          <FormElement
            className='style-form-element'
            name='Password'
            type='password'
            id='password'
            placeholder='Enter Your Password'
            inputname='password'
            value={this.state.user_details.password}
            changeHandler={this.changeHandler}
            error={this.state.user_details.errors.password}
          />
        </Form>
      </div>
    );
  }
}

export default FormClass;