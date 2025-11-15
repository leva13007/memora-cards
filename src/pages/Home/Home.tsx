import React from 'react';
import { NavLink } from 'react-router';
import { Container } from '../../shared/ui/atoms/Container/Container';
import { H1 } from '../../shared/ui/atoms/H1/H1.tsx';
import { H2 } from '../../shared/ui/atoms/H2/H2.tsx';

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <H1>Home Page</H1>
        <H2>Sub header</H2>
      </Container>
      <Container fluid>
        <NavLink to="/decks">Go to Decks</NavLink>
      </Container>
    </>
  );
};
