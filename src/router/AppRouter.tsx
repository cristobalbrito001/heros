import {  Route, Routes } from "react-router"

import { LoginPages } from "../auth";
import { HeroesRoutes } from "../heroes/routes";
const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="Login" element={<LoginPages />} />
                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
        </>
    )
}
export{
    AppRouter
}