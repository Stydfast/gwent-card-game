import React from 'react';
import { CardTypeBackground } from './CardType.style';
import { getCardType } from './CardType.utils';

const CardType = props => {
  return <CardTypeBackground>{getCardType(props)}</CardTypeBackground>;
};

export { CardType };
