import React from 'react';
import { CardTypeBackground } from './CardType.style';
import { getCardType } from './CardType.utils';

const CardType = props => {
  return <CardTypeBackground size={props.size}>{getCardType(props)}</CardTypeBackground>;
};

export { CardType };
