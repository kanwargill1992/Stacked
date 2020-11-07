import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { loading, profiles } }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return <div></div>;
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
