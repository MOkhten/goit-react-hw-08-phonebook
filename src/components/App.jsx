import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from 'pages/Home';
import Layout from './Layout';
import { lazy } from 'react';
import { fetchCurrentUser } from './redux/auth/auth-operations';
// import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';

const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));
const ContactPage = lazy(() => import('pages/Contacts'));


export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  
  return (
    
   <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}/>} />
        <Route  path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}/>} />
        <Route path="/contacts" element={<ContactPage/>} />
        </Route>
      </Routes>
    
    )

}
