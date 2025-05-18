import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"
import { typesAuth } from "../types/types"



const init =()=>{
   const user =  JSON.parse( localStorage.getItem('user') || 'null' );
   return{
    logged: !!user,
    user: user,
   }
}

const AuthProvider = ({children}) =>{
    
  const [state, dispatch] = useReducer(authReducer, {},init);
    
  const login  = (name:string) => {
    const action = {
        type: typesAuth.login,
        payload: {
            name: name,
        }  
    }
    localStorage.setItem('user', JSON.stringify(action.payload));
    dispatch(action);
  }


    const logout = () => {
        const action = {
            type: typesAuth.logout,
        }
        localStorage.removeItem('user');
        dispatch(action);
    }


    return(
        <AuthContext.Provider value={{state, login:login,logout:logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export{
    AuthProvider
}

