import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayaut"
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Login (){


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="dashboard"/>;
    }

    return(
    <DefaultLayout>
    <form className="form">
        
        <h1>LogIn</h1>

        <label htmlFor="">Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button>Login</button>
        
    </form>
    </DefaultLayout>
    );
}