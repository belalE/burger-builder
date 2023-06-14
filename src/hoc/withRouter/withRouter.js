import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  // other hooks

  return <WrappedComponent {...props} {...{ navigate, location }} />;
};

export default withRouter;
