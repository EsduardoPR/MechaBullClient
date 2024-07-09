import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoutes({children, redirectTo='/'}){
    let isAuth = localStorage.getItem('token');
    if(!isAuth){
        return <Navigate to={redirectTo}/>
    }
    return <Outlet/>
}