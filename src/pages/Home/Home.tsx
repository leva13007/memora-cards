import React from 'react';
import { NavLink } from 'react-router';
import { Container } from '../../shared/ui/atoms/Container/Container';
import {
  H1
} from '../../shared/ui/atoms/H1/H1.tsx';
import { TextBold, TextMedium, TextLight } from '../../shared/ui/atoms/Text/Text.tsx';

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <H1>Home Page</H1>
        <TextBold>Some Bold text</TextBold>
        <br />
        <TextMedium>Some Bold text</TextMedium>
        <br />
        <TextLight>Some Bold text</TextLight>
      </Container>
      <Container fluid>
        <NavLink to="/decks">Go to Decks</NavLink>
      </Container>
    </>
  );
};
