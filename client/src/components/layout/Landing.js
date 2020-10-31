import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <Wrapper>
            <h1 className="x-large">Welcome to Stacked</h1>
            <p className="lead">For Developers by Developers</p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn">
                Login
              </Link>
            </div>
          </Wrapper>
        </div>
      </div>
    </section>
  );
};

const Wrapper = styled.div`
  background-color: #0b3142;
  border: 1px solid #5db7de;
  padding: 1.5rem;
  opacity: 0.9;
`;

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
