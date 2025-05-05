import { useNavigate } from "react-router";

const LoginPages = () => {
    const navigate = useNavigate();
    const HandleLogin = () =>{
        navigate('/',{replace: true});
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