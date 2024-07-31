import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../Context/Auth';

const ProtectedLogin = () => {
       const auth = useAuth();

       // Debugging line
       console.log("Current user:", auth.user);

       if (auth.user) {
              // Redirect to home if the user is authenticated
              return <Navigate to="/" replace />;
       }

       return <Outlet />;
}

export default ProtectedLogin;
