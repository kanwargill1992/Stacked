import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle"></i>Page Not found
      </h1>
      <p className="large">Sorry This Page doesnot exist</p>
    </Fragment>
  );
};

export default NotFound;
