import { useDispatch } from 'react-redux';
import { logOut } from 'components/redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { ImUserCheck } from "react-icons/im";
import { Title, Button } from './UserMenu.styled';


const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

  return (
    <div display='flex'>
      <Title>Welcome, {user.name}</Title>
      <ImUserCheck color='#FFFFFF' size='24px'  />
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </div>
  );
};

export default UserMenu;
