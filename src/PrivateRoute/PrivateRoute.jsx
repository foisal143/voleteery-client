import React, { useContext } from 'react';
import { AtuhContext } from '../Authprovaider/Authprovaider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AtuhContext);
  if (loader) {
    return (
      <div className="text-center mt-12">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
