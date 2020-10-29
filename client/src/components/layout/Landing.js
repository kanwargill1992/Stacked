import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Landing = () => {
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

export default Landing;
