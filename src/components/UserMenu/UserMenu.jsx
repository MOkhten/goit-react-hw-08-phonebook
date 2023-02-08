import { useDispatch } from 'react-redux';
import { logOut } from 'components/redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { ImUserCheck } from "react-icons/im";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

  return (
    <div display='flex'>
      <h1>Welcome, {user.name}</h1>
      <ImUserCheck color='#111111' size='24px'/>
      <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
