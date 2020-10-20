import React from "react";

const Login = () => {
  return (
    <div>
      <section className="container">
        <div class="alert alert-danger">Invalid Credentials</div>

        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i class="fas fa-user"> </i>Sign into your account
        </p>
        <form action="dashboard.html" class="form">
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" minlength="6" />
          </div>

          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
        <p className="my-1">
          Don't have an account?
          <a href="register.html">Sign Up</a>
        </p>
      </section>
    </div>
  );
};

export default Login;
