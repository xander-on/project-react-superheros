import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const lasPath = pathname + search;
    localStorage.setItem('lastPath', lasPath);
    //   console.log('re-render');

    return (logged)
        ? children
        : <Navigate to="login" />
}
