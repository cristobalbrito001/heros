import {  useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }: {children: JSX.Element}) => {
     const {state}= useContext(AuthContext);
      console.log(state);
     return(state.logged) 
        ? <Navigate to="/" /> :children
         
}
export{
    PublicRoutes
}
