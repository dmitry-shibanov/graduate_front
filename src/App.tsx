import React, { Fragment, Component } from 'react';
import NavBar from "./components/Navbar/NavBar";
import { withRouter } from "react-router-dom"
import IndexPage from "./pages/index";
import IHistoryProps from "./models/props/IHistory"
import axios from "./axios";

import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import IAppState from './models/state/IApp';

class App extends React.Component<IHistoryProps, IAppState> {

  state = {
  showBackdrop: false,
  isAuth: false,
  token: null,
  userId: null,
  authLoading: false,
  error: null
};

componentDidMount() {
  const token = localStorage.getItem('token');
  const expiryDate = localStorage.getItem('expiryDate');
  if (!token || !expiryDate) {
    return;
  }
  if (new Date(expiryDate) <= new Date()) {
    this.logoutHandler();
    return;
  }
  const userId = localStorage.getItem('userId');
  const remainingMilliseconds =
  new Date(expiryDate).getTime() - new Date().getTime();
  console.log(localStorage.getItem('token'));
  this.setState({ isAuth: true, token: token, userId: userId });
  this.setAutoLogout(remainingMilliseconds);
}

  render(){
    return (
      <Fragment>

      <NavBar isAuth = { this.state.isAuth } logout = { this.logoutHandler } />
        <IndexPage history={this.props.history} match={this.props.match} location={this.props.location} loginHandler={this.loginHandler} logout={this.logoutHandler} signupHandler={this.signupHandler} authLoading= {this.state.authLoading} isAuth = {this.state.isAuth} />

        </Fragment>
    );
  }

  signupHandler = (event: React.FormEvent<HTMLFormElement>, authData: any) => {
    
  event.preventDefault();
  this.setState({ authLoading: true });
  axios.post("/signup", {
    email: authData.signupForm["email"].value,
    password: authData.signupForm["password"].value,
    confirmPassword: authData.signupForm["confirmPassword"].value,
    login: authData.signupForm["name"].value
},{method:"POST"}).then(res => {
    if (res.status === 422) {
      throw new Error(
        "Validation failed. Make sure the email address isn't used yet!"
      );
    }
    if (res.status !== 200 && res.status !== 201) {
      console.log('Error!');
      throw new Error('Creating a user failed!');
    }
    return res.data;
  })
    .then(resData => {
      console.log(resData);
      this.setState({ isAuth: false, authLoading: false });
      this.props.history.replace('/auth/login');
    })
    .catch(err => {
      console.log(err);
      this.setState({
        isAuth: false,
        authLoading: false,
        error: err
      });
    });
};

loginHandler = (event: React.FormEvent<HTMLFormElement>, authData: any) => {
  event.preventDefault();
  this.setState({ authLoading: true });
  axios.post('/login', {
    email: authData.email,
    password: authData.password
  }).then(response => {
    console.log(response);
    if (response.status === 422) {
      throw new Error('Validation failed.');
    }
    if (response.status !== 200 && response.status !== 201) {
      console.log('Error!');
      throw new Error('Could not authenticate you!');
    }
    return response.data;
  }).then(resData => {
    console.log(resData);
    this.setState({
      isAuth: true,
      token: resData.token,
      authLoading: false,
      userId: resData.userId
    });
    localStorage.setItem('token', resData.token);
    localStorage.setItem('userId', resData.userId);
    const remainingMilliseconds = 60 * 60 * 1000;
    const expiryDate = new Date(
      new Date().getTime() + remainingMilliseconds
    );
    localStorage.setItem('expiryDate', expiryDate.toISOString());
    this.setAutoLogout(remainingMilliseconds);
    this.props.history.replace('/');
  })
    .catch(err => {
      console.log(err);
      this.setState({
        isAuth: false,
        authLoading: false,
        error: err
      });
    });
  }

  logoutHandler = () => {
  this.setState({ isAuth: false, token: null });
  localStorage.removeItem('token');
  localStorage.removeItem('expiryDate');
  localStorage.removeItem('userId');
};

  setAutoLogout = (milliseconds: number) => {
  setTimeout(() => {
    this.logoutHandler();
  }, milliseconds);
};

errorHandler = () => {
  this.setState({ error: null });
};
}

export default withRouter(App);
