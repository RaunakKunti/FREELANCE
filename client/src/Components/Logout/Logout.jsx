import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Store/Auth";

const Logout = () => {
  const { LogoutUser } = useAuth();
  //go to Auth.jsx file for handling the logout functionality
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <Navigate to="/login" />;
};

export default Logout;
