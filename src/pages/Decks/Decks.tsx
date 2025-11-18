import React from 'react';
import { NavLink } from 'react-router';
import { H1 } from '../../shared/ui/atoms/H1/H1.tsx';

export const Decks: React.FC = () => {
  return (
    <>
      <H1>Decks Page</H1>
      <NavLink to="/">Go to Home</NavLink>
    </>
  );
};
