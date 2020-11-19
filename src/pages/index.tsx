import React, { Fragment, FunctionComponent, ReactChildren } from "react";
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
import NotFound from "./error/404/NotFound";
import ServerError from "./error/500/ServerError";
import Forbidden from "./error/403/Forbidden";
import LoginAdmin from "./auth/admin/Login";
import StreamCreate from "./videos/stream/StreamCreate";
import StreamEdit from "./videos/stream/StreamEdit";
import StreamDelete from "./videos/stream/StreamDelete";
import StreamShow from "./videos/stream/StreamShow";
import StreamList from "./videos/stream/StreamList";
import SinglePost from "./shop/blogs/blogs/singleBlog/SingleBlog";
import ListCourseItems from "./shop/ListCourseItems";
import VideoDetail from "./videos/lessons/VideoDetail";
//images should be with fade in and fade out animations

const indexPage: FunctionComponent<IGeneral> = ({
  signupHandler,
  loginHandler,
  authLoading,
  history,
  location,
  match,
  isAuth,
  userId,
  token,
}) => {
  function PrivateRoute(props: any) {
    const { children } = props;
    return (
      <Route
        // {...rest}
        render={({ location }) =>
          isAuth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/error/403",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

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
      <Route exact path="/streams" component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit/:id" exact component={StreamEdit} />
      <Route path="/streams/delete/:id" exact component={StreamDelete} />
      <Route path="/streams/:id" exact component={StreamShow} />
      <Route
        path="/profile"
        render={(props) => (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        )}
      />
      <Route
        path="/courses/:id"
        render={(props) => (
          <PrivateRoute>
            <ListCourseItems match={match} history={history} />
          </PrivateRoute>
        )}
      />
      <Route
        path="/courses"
        exact
        render={(props) => (
          <PrivateRoute>
            <ListCourses />
          </PrivateRoute>
        )}
      />
      <Route
        path="/videos/:id"
        render={(props) => (
          <PrivateRoute>
            <VideoDetail match={match} history={history}/>
          </PrivateRoute>
        )}
      />
      <Route
        path="/blogs"
        exact
        render={(props) => (
          <Feed isAuth={isAuth} userId={userId} token={token} />
        )}
      />
      <Route path="/admin/login" exact component={LoginAdmin} />
      <Route
        path="/blogs/:id"
        exact
        render={(props) => (
          <SinglePost {...props} userId={userId} token={token} />
        )}
      />
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
      <Route
        path="/user/classroom"
        render={(props) => <ClassRoom token={token} />}
      />
      <Route path="/error/500" component={ServerError} />
      <Route path="/error/403" component={Forbidden} />

      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default indexPage;
