
// import { ContactList } from './ContactList/ContactList';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { Phonebook } from './App.styled';
import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from 'pages/Home';
import Layout from './Layout/Layout';
import { lazy } from 'react';
import { fetchCurrentUser } from './redux/auth/auth-operations';

const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));


export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  
  return (
    <>
   <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        
        </Route>
      </Routes>
    </>
  //    <Phonebook>
  //      <h1>Phonebook</h1>
  //      <ContactForm />
  //      <h2>Contacts</h2>
  //      <Filter />
  //    <ContactList/>
  // </Phonebook>
  )

}
