import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} At {company}
      </p>
      <p>{location}</p>
      <div className="icons my-1">
        <a href="#">
          <i className="fas fa-globe fa-2x"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
