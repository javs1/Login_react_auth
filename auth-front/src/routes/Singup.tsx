import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayaut";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";


export default function SingUp (){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="dashboard"/>;
    }

    return(
    <DefaultLayout>
    <form className="form">
        
        <h1>SignUp</h1>

        <label htmlFor="">Usename</label>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>

        <label htmlFor="">Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button>Login</button>
        
    </form>
    </DefaultLayout>
    );
}