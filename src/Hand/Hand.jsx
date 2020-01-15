import React from 'react';
import { HandStyled } from './Hand.style';

const Hand = ({ children }) => (
  <HandStyled>
    {children}
  </HandStyled>
);

export { Hand };
