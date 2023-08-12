import { useContext }  from "react";
import { Navigate }    from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const baseRoute = useContext( AuthContext ).baseRoute ?? '';


    return (!logged)
        ? children
        : <Navigate to={`${baseRoute}/marvel`} />
}
