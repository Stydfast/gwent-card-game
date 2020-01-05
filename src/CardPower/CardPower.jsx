import React from 'react';
import { getPowerBalance } from './CardPower.utils';
import { CardPowerBackground } from './CardPowerBackground.style';

const CardPower = props => {
  let { value } = props;

  return <CardPowerBackground powerBalance={getPowerBalance(props)}>{value < 1 ? 1 : value}</CardPowerBackground>;
};

export { CardPower };
