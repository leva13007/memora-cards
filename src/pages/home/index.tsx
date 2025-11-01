import React from 'react';
import { NavLink } from 'react-router';

const Home: React.FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <NavLink to="/decks">Go to Decks</NavLink>
    </>
  );
};

export default Home;
