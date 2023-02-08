import { Header, Container} from './Layout.styled.js';
// import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from 'components/Loader.js';
import AuthNav from '../NavLink/NavLink.jsx';
import UserMenu from 'components/UserMenu/UserMenu.jsx';
import { useAuth } from 'hooks/useAuth.js';
import Navigation from 'components/Navigation/Navigation.jsx';

const Layout = () => {
  const { isLoggedIn } = useAuth();
    return (
      <Container>
        <Header>
            <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

        </Header>
              <Suspense fallback={<Loader/>}>
        </Suspense>
      </Container>

)
};

export default Layout;
