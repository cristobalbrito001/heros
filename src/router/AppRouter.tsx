import {  Route, Routes } from "react-router"

import { LoginPages } from "../auth";
import { HeroesRoutes } from "../heroes/routes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";
const AppRouter = () => {
    return(
        <>
            <Routes>

               <Route path="Login" element={
                <PublicRoutes>
                    <LoginPages />
                </PublicRoutes>
               } />
                

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }/>

               
            </Routes>
        </>
    )
}
export{
    AppRouter
}