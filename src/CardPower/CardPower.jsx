import React from 'react';
import { getPowerBalance } from './CardPower.helper';
import { CardPowerBackground } from './CardPowerBackground.style';

const CardPower = props => {
  let { value } = props;

  if (value < 1) {
    value = 1;
  }

  return <CardPowerBackground powerBalance={getPowerBalance(props)}>{value}</CardPowerBackground>;
};

export { CardPower, getPowerBalance };
