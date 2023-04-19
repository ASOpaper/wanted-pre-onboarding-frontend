import { Navigate, Outlet } from "react-router-dom"


const PrivateRoutes =()=>{
    const token = localStorage.getItem('access_token');
    const loginState = () => {
        if(token) return true;
        return false;
    }
    return loginState() ? (    
        <Outlet>
        </Outlet>
    ) : <Navigate to="/signin" />
}

export default PrivateRoutes;
