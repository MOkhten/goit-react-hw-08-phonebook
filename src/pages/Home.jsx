import React from 'react';
import { Title, Features, Container } from '../pages/Home.styled';


const Home = () => (
  <Container>
    <Title>
      Welcome to Phonebook application for both desktop and mobile devices.

It provides a central place for starting conversations. Depending on the information available about a contact, respective actions are displayed.

Features:

      <ul>
        <Features>Add contacts</Features>
        <Features>Remove contacts</Features>
        <Features>Find the contact</Features>
      </ul>
      </Title>
      {/* <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span> */}
    
  </Container>
);

export default Home;