import { Route, Routes } from "react-router-dom";

import { AuthContext, LoginPage }    from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute }  from "./PublicRoute";
import { useContext }   from "react";

export const AppRouter = () => {

    const baseRoute = useContext( AuthContext ).baseRoute ?? '';

    return (
        <Routes>

            <Route path={`${baseRoute}/login`} element={
                <PublicRoute>
                    <LoginPage/>
                </PublicRoute>
            } />

            <Route path={`${baseRoute}/*`} element={
                <PrivateRoute>
                    <HeroesRoutes/>
                </PrivateRoute>
            }/>

        </Routes>
    );
}
