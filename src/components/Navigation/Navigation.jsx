import { useAuth } from "hooks/useAuth";
import { StyledLink, Header } from '../Navigation/Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    
    <nav>
      <Header >
        {/* <NavLink to="/">
          PHONEBOOK
        </NavLink> */}
        {isLoggedIn && (
          <StyledLink to="/contacts">
            Contacts
          </StyledLink>
        )}
      </Header>
      </nav>
      
  );
};

export default Navigation;