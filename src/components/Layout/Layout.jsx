import { Header, Container, StyledLink } from './Layout.styled.js';
// import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from 'components/Loader.js';
import AuthNav from '../NavLink/NavLink.jsx';
import UserMenu from 'components/UserMenu/UserMenu.jsx';
import { useAuth } from 'hooks/useAuth.js';


const Layout = () => {
const { isLoggedIn } = useAuth();
    return (
      <Container>
        <Header>
     <nav>
        <StyledLink to="/" end>
          Home
            </StyledLink>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {/* <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink> */}
          </nav>
        </Header>
         <Suspense fallback={<Loader/>}>
      </Suspense>
            </Container>
)
};

export default Layout;