import React from 'react';
import { NavLink } from 'react-router';

const Decks: React.FC = () => {
  return (
    <>
      <h1>Decks Page</h1>
      <NavLink to="/">Go to Home</NavLink>
    </>
  );
};

export default Decks;
