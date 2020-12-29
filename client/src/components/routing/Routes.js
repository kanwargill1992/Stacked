import React from "react";
import { Route, Switch } from "react-router";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import Alert from "../../components/layout/Alert";
import Dashboard from "../../components/dashboard/Dashboard";
import PrivateRoute from "../../components/routing/PrivateRoute";
import CreateProfile from "../../components/profile-form/CreateProfile";
import EditProfile from "../../components/profile-form/EditProfile";
import AddExperience from "../../components/profile-form/AddExperience";
import AddEducation from "../../components/profile-form/AddEducation";
import Profiles from "../../components/profiles/Profiles";
import Profile from "../../components/profile/Profile";
import Posts from "../../components/posts/Posts";
import Post from "../../components/post/Post";
import NotFound from "../../components/layout/NotFound";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-Experience" component={AddExperience} />
        <PrivateRoute exact path="/add-Education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
