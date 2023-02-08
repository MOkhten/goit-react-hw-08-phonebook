import { useAuth } from "hooks/useAuth";
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    
    <nav>
      <div display='flex' >
        <NavLink to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
      </nav>
      
  );
};

export default Navigation;