import { Header, Container} from './AppBar.styled.js';
import { Loader } from 'components/Loader.js';
import AuthNav from '../NavLink/NavLink.jsx';
import UserMenu from 'components/UserMenu/UserMenu.jsx';
import { useAuth } from 'hooks/useAuth.js';
import Navigation from 'components/Navigation/Navigation.jsx';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
    return (
      <Container>
        <Header>
            <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

        </Header>
       
      </Container>

)
};

export default AppBar;
