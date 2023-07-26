import { Navigate } from "react-router-dom";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
    { path: "/about", element: <About /> },
    { path: "/", element: <About /> },
    { path: "/posts", element: <Posts /> },
    { path: "/posts/:id", element: <PostIdPage /> },
    { path: "/login", element: <Navigate to="/posts" /> },
    { path: "/error", element: <Error /> },
    { path: "*", element: <Navigate to="/error" replace /> },
];

export const publicRoutes = [
    { path: "*", element: <Navigate to="/login" replace /> },
    { path: "/login", element: <Login /> },
];
