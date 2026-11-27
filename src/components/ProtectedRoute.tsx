import { Navigate, Outlet, useLocation } from "react-router";
import { useUser } from "../auth/userContext";
import ErrorPage from "../pages/ErrorPage";


export default function ProtectedRoute() {
    
    const {userStatus} = useUser();
    const location = useLocation();

    if (userStatus.status === 'anonymous') {
        return <Navigate to='/user/login' replace state={{from:location.pathname}}/>;
    } else if (userStatus.status === 'error') {
        return <ErrorPage message={userStatus.message}/>
    }
    return <Outlet/>
}