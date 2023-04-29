import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login'  replace></Navigate>
};

export default PrivateRoute;



/**
 * STEP///////
 * 
 * 1 cheack user is logged in or not.
 * 2 if user is loggged in,then allow them to visit route
 * 3 Else redirects the user to the login page
 * 4 setup the private router
 */