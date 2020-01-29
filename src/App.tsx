import React, { Fragment } from 'react';
import NavBar from "./components/navbar/navbar_header";
import Footer from "./components/footer/footer";
import IndexPage from "./pages/index";
import logo from './logo.svg';
import "bootstrap";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch } from 'react-router';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';

const App: React.FC = () => {

  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

  return (
    <Router >
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Fragment>
    </Router>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
