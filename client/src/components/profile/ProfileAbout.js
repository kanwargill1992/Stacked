import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        <h2 className="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
        <p>{bio}</p>
      </Fragment>
    )}

    {/* <div className="line"></div> */}
    <h2 className="text-primary p-1">Skill Set</h2>
    <div className="skills">
      {skills.map((skill, index) => (
        <div className="" key={index}>
          <i class="fas fa-check">{skill}</i>
        </div>
      ))}
    </div>
  </div>
);
ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
