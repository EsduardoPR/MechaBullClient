import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoutes({isAllowed, children, redirectTo='/'}){
    if(!isAllowed){
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
}