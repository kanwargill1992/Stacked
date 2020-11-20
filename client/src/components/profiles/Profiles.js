import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getProfiles, profile: { loading, profiles } }) => {
  //get all the profiles
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Stacked People</h1>
          <p className="lead ">
            <i className="fab fa-connectdevelop"></i>Connect with creators
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map(
                (item) => <ProfileItem key={item._id} profile={item} />
                // (item) => console.log(item)
                // console.log(item._id)
              )
            ) : (
              <h4>No profiles found.....</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
