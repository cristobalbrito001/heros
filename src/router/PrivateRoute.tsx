import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const {state}= useContext(AuthContext);
    const {pathname,search} =  useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
     return(!state.logged) 
        ? <Navigate to="/login" />
         :children
        
}
export {
    PrivateRoute
}

