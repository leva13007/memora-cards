import React from 'react';
import { NavLink } from 'react-router';
import { Container } from '../../shared/ui/atoms/Container/Container';

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Home Page</h1>
      </Container>
      <Container fluid>
        <NavLink to="/decks">Go to Decks</NavLink>
      </Container>
    </>
  );
};
