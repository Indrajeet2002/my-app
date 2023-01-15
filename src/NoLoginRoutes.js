import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "./firebase";

const NoLoginRoutes= () => {
    let user = useUser();

    return (
        !user ? <Outlet/> : <Navigate to='/Playlists'/>
    );
}

export default NoLoginRoutes