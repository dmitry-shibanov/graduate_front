import React, { Component } from 'react';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/Button/Button';
import { required, length, email } from '../../utils/validators';
import Auth from './Auth';
import ISignup from '../../models/props/ISignup';
import axios from "../../axios";
class Signup extends Component<ISignup, any> {
  state = {
    signupForm: {
      email: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, email]
      },
      password: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })]
      },
      confirmPassword: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })]
      },
      name: {
        value: '',
        valid: false,
        touched: false,
        validators: [required]
      },
      formIsValid: false
    }
  };

  inputChangeHandler = (input:any, value:any) => {
    this.setState((prevState: any) => {
      let isValid = true;
      for (const validator of prevState.signupForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.signupForm,
        [input]: {
          ...prevState.signupForm[input],
          valid: isValid,
          value: value
        }
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        signupForm: updatedForm,
        formIsValid: formIsValid
      };
    });
  };

  inputBlurHandler = (input: any) => {
    this.setState((prevState: any) => {
      return {
        signupForm: {
          ...prevState.signupForm,
          [input]: {
            ...prevState.signupForm[input],
            touched: true
          }
        }
      };
    });
  };

  onSignUp = async (e:any) => {
      e.preventDefault();
      console.log("debug line method signUp");
      console.log({
        email: this.state.signupForm["email"].value,
        password: this.state.signupForm["password"].value,
        confirmPassword: this.state.signupForm["confirmPassword"].value,
        name: this.state.signupForm["name"].value
    });
    const result = await axios.post("/signup", {
        email: this.state.signupForm["email"].value,
        password: this.state.signupForm["password"].value,
        confirmPassword: this.state.signupForm["confirmPassword"].value,
        login: this.state.signupForm["name"].value
    },{method:"POST"});
    
    if (result.status === 201){
        this.props.history.push("/auth/login");
    }
    console.log(result);
  }

  render() {
    return (
      <Auth>
        <form onSubmit={this.onSignUp}>
        {/* // {(e: React.FormEvent<HTMLFormElement>) => this.onSignUp} */}
        {/* this.props.onSignup(e, this.state) */}
          <Input
            id="email"
            label="Your E-Mail"
            type="email"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'email')}
            value={this.state.signupForm['email'].value}
            valid={this.state.signupForm['email'].valid}
            touched={this.state.signupForm['email'].touched}
          />
          <Input
            id="name"
            label="Your Name"
            type="text"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'name')}
            value={this.state.signupForm['name'].value}
            valid={this.state.signupForm['name'].valid}
            touched={this.state.signupForm['name'].touched}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'password')}
            value={this.state.signupForm['password'].value}
            valid={this.state.signupForm['password'].valid}
            touched={this.state.signupForm['password'].touched}
          />
         <Input
            id="confirmPassword"
            label="confirm Password"
            type="password"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'confirmPassword')}
            value={this.state.signupForm['confirmPassword'].value}
            valid={this.state.signupForm['confirmPassword'].valid}
            touched={this.state.signupForm['confirmPassword'].touched}
          />
          <Button design="raised" type="submit" loading={this.props.loading}>
            Signup
          </Button>
        </form>
      </Auth>
    );
  }
}

export default Signup;