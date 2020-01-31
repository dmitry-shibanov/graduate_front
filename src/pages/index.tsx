import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import SignUp from './auth/SignUp';
import Login from './auth/Login';
import IndexPage from "../pages/shop/Index"
//images should be with fade in and fade out animations

function indexPage() {
    return (
        <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/auth/signup" exact component={SignUp} />
        <Route path="/auth/login" exact component={Login} />

      </Switch>
        
    );
}

export default indexPage;