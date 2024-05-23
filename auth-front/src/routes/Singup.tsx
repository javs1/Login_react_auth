import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayaut";
import { useAuth } from "../auth/AuthProvider";
import { ErrorResponse, Navigate } from "react-router-dom";
import { API_URL } from "../auth/constants";
import { AuthResponse, AuthResponseError } from "../types/types";


export default function SingUp (){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    

    const auth = useAuth();

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try{
            //Post user credentials
            const response = await fetch(`${API_URL}/singup`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                })
            })

            //Confirm response is correct and user is created
            if(response.ok){
                console.log("User created")
            }
            else{
                console.log("Something went wrong")
                const json = (await response.json()) as AuthResponseError;
                setErrorResponse(json.body.error);
                return;
            }
        }

        catch (error){
            console.log(error)
        }
    }

    if(auth.isAuthenticated){
        return <Navigate to="dashboard"/>;
    }

    return(
    <DefaultLayout>
    <form className="form">
        
        <h1>SignUp</h1>
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}

        <label>Usename
        <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
        </label>
        
        <label>Email
        <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </label>
        

        <label>Password
        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </label>
        

        <button>SignUp</button>
        
    </form>
    </DefaultLayout>
    );
}