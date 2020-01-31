import React, { Fragment } from 'react';
import NavBar from "./components/navbar/navbar_header";
import "bootstrap";
import './App.css';
import { BrowserRouter as Router, withRouter } from "react-router-dom"
import IndexPage from "./pages/index";
const App: React.FC = () => {


  return (
      <Fragment>
        <NavBar />
          <IndexPage/>
        {/* <Footer /> */}
      </Fragment>
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

export default withRouter(App);
