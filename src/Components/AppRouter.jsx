import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <Loader/>
    }

    return (
        <Routes>
                {isAuth?privateRoutes.map((route, index)=>{
                    return <Route key={index} element={route.element} path={route.path}/>
                }):publicRoutes.map((route, index)=>{
                    return <Route key={index} element={route.element} path={route.path}/>
                })}
        </Routes>
    )
};

export default AppRouter;
