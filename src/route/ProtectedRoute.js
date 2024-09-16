import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import authContext from '../store/auth-context/auth-context';


function ProtectedRoute({children}) {
const authCtx = useContext(authContext)

  return authCtx.isLoggedIn ? children : <Navigate to="/"/>
}

export default ProtectedRoute