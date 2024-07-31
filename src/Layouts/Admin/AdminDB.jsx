import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Auth';

const AdminDB = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    // navigate("/", { replace: true });
  }

  // Redirect to login page if user is not authenticated
  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <div>AdminDB</div>
      <h1>Name: {auth.user.firstName} {auth.user.lastName}</h1>
      <h2>Phone: {auth.user.phone}</h2>
      <h3>Type: {auth.user.type}</h3>
      <Link to="/">BACK</Link>
      <br />
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  );
}

export default AdminDB;
