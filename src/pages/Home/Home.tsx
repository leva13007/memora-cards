import React from 'react';
import { NavLink } from 'react-router';
import { Container } from '../../shared/ui/atoms/Container/Container';
import {
  H1
} from '../../shared/ui/atoms/H1/H1.tsx';

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <H1>Home Page</H1>
      </Container>
      <Container fluid>
        <NavLink to="/decks">Go to Decks</NavLink>
      </Container>
    </>
  );
};
