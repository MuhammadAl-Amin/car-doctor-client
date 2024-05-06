import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user?.email){
        return children;
    }
  return <Navigate to="/Login" replace></Navigate>
}

export default PrivateRoute