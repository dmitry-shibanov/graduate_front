import React, { Fragment, FunctionComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import IndexPage from "../pages/shop/Index";
import Blogs from "./shop/blogs/Blogs";
import ListCourses from "./shop/ListCourses";
import Feed from "./shop/blogs/blogs/ListBlogs";
import IGeneral from "../models/props/IGeneral";
//images should be with fade in and fade out animations

const indexPage: FunctionComponent<IGeneral> = ({signupHandler, authLoading, history, location, match}) => {
  return (
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path='/courses/:id' component={IndexPage} />
      <Route path="/courses" exact component={ListCourses} />
      <Route path='/blogs/:id' component={Feed} />
      <Route path="/blogs" exact component={Blogs} />
      <Route path="/auth/signup" component={SignUp} render={props => (
            <SignUp
              onSignup={signupHandler}
              loading={authLoading}
              history={history}
              location={location}
              match={match}
            />
          )}/>
      <Route path="/auth/login" component={Login} />
      <Route render={()=><h1>Not found</h1>}/>
    </Switch>
  );
}

export default indexPage;