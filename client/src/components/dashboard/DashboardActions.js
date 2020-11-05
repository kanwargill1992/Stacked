import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div class="dash-buttons">
      <Link to="/create-profile" class="btn">
        <i class="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>
      <Link to="/add-experience" class="btn">
        <i class="fab fa-black-tie text-primary"></i> Add experience
      </Link>
      <Link to="/add-education" class="btn">
        <i class="fas fa-graduation-cap text-primary"></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
