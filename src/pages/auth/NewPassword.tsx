import React, { Component } from 'react';
import IHistory from '../../models/props/IHistory';
import Auth from './Auth';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/Button/Button';
import { required, length, email } from '../../utils/validators';

import axios from 'axios';
import INewPassword from '../../models/state/INewPassword';

class NewPassword extends Component<IHistory, INewPassword> {
    constructor(props:IHistory){
        super(props);
        this.state = {
            loading: true,
            error: false,
            message: "Loading data",
            password: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 5 })]
            },
            formIsValid: false
        }
    }
    async componentDidMount(){
        const result = await axios.get("/reset", {
            params: {
                token: this.props.match.params.token
            }
        });

        if(result.data.error === true){
            this.setState({
                loading: false,
                error: true,
                message: result.data.message
            })
        }else{
            this.setState({
                loading: false,
                error: false,
                message: result.data.message
            })
        }
    }

    changePassword = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    inputChangeHandler = (input: string, value: string) => {
        this.setState((prevState: Readonly<INewPassword>, props: Readonly<IHistory>) => {
          let isValid = true;
          for (const validator of prevState.password!.validators) {
            isValid = isValid && validator(value);
          }
          const updatedForm = {
            password: {
              ...prevState.password,
              valid: isValid,
              value: value
            }
          };
          let formIsValid = true;
        formIsValid = formIsValid && updatedForm.password.valid;
        const newState: INewPassword = {
          ...prevState,
          password: updatedForm.password,
          formIsValid: formIsValid
        };
        return newState;
        });
      };
    
      inputBlurHandler = (input:any) => {
        this.setState((prevState:any) => {
          return {
            password: {
              ...prevState.password,
                touched: true
            }
          };
        });
      };

    render(){
        const {error, message, loading} = this.state;

        if(loading){
        return (<div>{message}</div>)
        }else if(error){
        return (<h1>{message}</h1>)
        }else{
            return (<Auth>
            <form onSubmit={this.changePassword}>
            <Input
            id="password"
            label="Password"
            type="password"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'password')}
            value={this.state.password!.value}
            valid={this.state.password!.valid}
            touched={this.state.password!.touched}
          />
              <Button design="raised" type="submit">
                Confirm
              </Button>
            </form>
          </Auth>)
        }
    }
}

export default NewPassword;