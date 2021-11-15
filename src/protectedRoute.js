import { useSelector,useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router';
import { Outlet } from 'react-router';
export default function RequireAuth() {
    const login = useSelector(state => state.logged.isLogged)
    let location = useLocation();
  
    if (!login) {
      
      return <Navigate to="/signin" state={{ from: location }} />;
    }
  
    return <Outlet />;
  }