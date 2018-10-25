import React from "react";
import {
  withRouter
} from "react-router-dom";

const UserHeader = (props) => {
  return (
    <div className="user-header">
      <header className="image-header">
      </header>
    </div>
  );
};

export default withRouter(UserHeader);