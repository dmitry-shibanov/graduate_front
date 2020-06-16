import React, { Component } from "react";
import styles from "./ServerError.module.css";
import { Link } from "react-router-dom";

class ServerError extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h1>500</h1>
          <p>Sorry, it's me, not you.</p>
          <p>&#58;&#40;</p>
          <p>
            <Link to="/">Let me try again!</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ServerError;
