import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"> </i>Create Your Account
      </p>
      <form action="dashboard.html" class="form">
        <div className="form-group">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" />
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" minlength="6" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" minlength="6" />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Already have an account?
        <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};

export default Register;
