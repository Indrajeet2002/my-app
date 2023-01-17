import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "./firebase";

const LoginRoutes = () => {
    let user = useUser();

    return (
        user ? <Outlet/> : <Navigate to='/'/>
    );
}

export default LoginRoutes