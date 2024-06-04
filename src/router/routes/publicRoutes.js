import { lazy } from "react";
const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
//0import Login from "../../views/auth/login"
//import Register from "../../views/auth/register";
//import Register from './../../views/auth/Register';

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
export default publicRoutes;