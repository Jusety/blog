import React, { useContext, useState } from "react";
import MyButton from "../Components/UI/button/MyButton";
import MyInput from "../Components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {setIsAuth} = useContext(AuthContext);
    const login = (e)=>{
        e.preventDefault();
        localStorage.setItem("auth", {name:name, password:password});
        setIsAuth(true);
    }

    return (
        <div style={{marginTop:"20px"}}>
           <h1 style={{textAlign:"center"}}>Page for log in</h1>
           <form onSubmit={login}>
                <MyInput type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter name"/>
                <MyInput type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
                <MyButton>Log in</MyButton>
           </form>
        </div>
    )
};

export default Login;
