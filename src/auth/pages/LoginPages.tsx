import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context";

const LoginPages = () => {
    const{ login }= useContext(AuthContext);
    const navigate = useNavigate();
    const HandleLogin = () =>{
        const lastPath = localStorage.getItem('lastPath') || '/';
        login('Cris brito')
        navigate(lastPath,{replace: true});
    }
    return(
        <>
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />
                <button 
                    className="btn btn-primary"
                    onClick={ HandleLogin}
                    >
                    login
                </button>

            </div>
                
            </>
    )
}

export{
    LoginPages
}