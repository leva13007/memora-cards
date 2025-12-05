import React from 'react';
import { H1 } from '../../shared/ui/atoms/H1/H1.tsx';
import { TextLink } from '../../shared/ui/atoms/TextLink/TextLink.tsx';

export const Decks: React.FC = () => {
  return (
    <>
      <H1>Decks Page</H1>
      <TextLink aria-label="some text" to="/" content="Go to Home" />
    </>
  );
};
