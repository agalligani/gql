import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import { AllPost, PostForm, PostEditor, PostsByTerm } from "./components/Posts";
// import ImageUpload from "./components/ImageUpload/ImageUpload";
import UserApp from "./components/User/UserApp";
import { connect } from "react-redux";
import UserDeets from "./components/User/UserDeets";

class App extends Component {
  render() {
    return (
      <Router>
        <MainNav
          isAuthenticated={
            this.props.state.user.login_status === 200 ? true : false
          }
        />
        <Route path="/home" render={() => <h2>Hi</h2>} />
        <div>
          <Switch>
            <Route path="/welcome">
              {() => {
                return (
                  <Fragment>
                    <UserDeets />
                  </Fragment>
                );
              }}
            </Route>
            <PrivateRoute
              path="/addpost"
              login_status={this.props.state.user.login_status}
            >
              <PostForm />
            </PrivateRoute>
            <Route path="/login">
              {() => {
                return <UserApp />;
              }}
            </Route>
            <Route path="/allposts">
              {() => {
                return <AllPost />;
              }}
            </Route>
            <Route path="/posts/:vocab/:term">
              {() => {
                return <PostsByTerm />;
              }}
            </Route>
            <Route path="/post/:nid/:action">
              <PostEditor />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let isAuthenticated = rest.login_status === 200 ? true : false;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(App);
