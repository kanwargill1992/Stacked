import React, { Fragment } from "react";
import loader from "../../img/loader.gif";

export default () => {
  return (
    <Fragment>
      <img
        src={loader}
        style={{ width: "50px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </Fragment>
  );
};
