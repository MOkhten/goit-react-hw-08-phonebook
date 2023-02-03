
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Phonebook } from './App.styled';
import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import Login from 'pages/Login';
import Home from 'pages/Home';
import Layout from './Layout/Layout';
import { lazy } from 'react';

const Login = lazy(() => import('pages/Login'));


export function App() {
  const dispatch = useDispatch();
  
  return (
    <>
   <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/register" component={RegisterView} /> */}
        <Route path="/login" component={<Login/>} />
        
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
