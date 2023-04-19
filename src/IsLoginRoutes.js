import { Navigate, Outlet } from "react-router-dom"


const IsLoginRoutes =()=>{
    const token = localStorage.getItem('access_token');
    const loginState = () => {
        if(token) return false;
        return true;
    }
    return loginState() ? (    
        <Outlet>
        </Outlet>
    ) : <Navigate to="/todo" />
}

export default IsLoginRoutes;