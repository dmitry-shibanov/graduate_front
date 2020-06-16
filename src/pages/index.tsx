import React, { Fragment, FunctionComponent } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import IndexPage from "../pages/shop/Index";
import Blogs from "./shop/blogs/Blogs";
import ListCourses from "./shop/ListCourses";
import Feed from "./shop/blogs/blogs/ListBlogs";
import IGeneral from "../models/props/IGeneral";
import { loadavg } from "os";
import UserProfile from "./auth/lk/UserProfile";
import Orders from "./auth/lk/Orders/Orders";
import Basket from "./auth/lk/Basket/Basket";
import ResetPassword from "./auth/resets/ResetPassword";
import ConfirmPassword from "./auth/ConfirmPassword";
import ClassRoom from "./videos/lessons/ClassRoom";
import NotFound from "./NotFound";
//images should be with fade in and fade out animations

const indexPage: FunctionComponent<IGeneral> = ({
  signupHandler,
  loginHandler,
  authLoading,
  history,
  location,
  match,
  isAuth,
}) => {
  return (
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route
        path="/confirmRegestration/:token"
        render={(props) => (
          <ConfirmPassword
            history={history}
            match={match}
            location={location}
          />
        )}
      />
      <Route path="/profile" component={UserProfile} />
      <Route path="/basket" component={Basket} />
      <Route path="/courses/:id" component={IndexPage} />
      <Route path="/courses" exact component={ListCourses} />
      <Route path="/blogs" render={(props) => <Feed isAuth={isAuth} />} />
      <Route path="/blogs/:id" exact component={Feed} />
      <Route
        path="/auth/signup"
        render={(props) => (
          <SignUp
            onSignup={signupHandler}
            loading={authLoading}
            history={history}
            location={location}
            match={match}
          />
        )}
      />
      <Route
        path="/auth/login"
        render={(props) => (
          <Login
            onLogin={loginHandler}
            history={history}
            match={match}
            location={location}
            loading={authLoading}
          />
        )}
      />
      <Route path="/auth/reset" component={ResetPassword} />
      <Route path="/user/classroom" component={ClassRoom} />
      <Route render={() => <NotFound/>} />
    </Switch>
  );
};

export default indexPage;
