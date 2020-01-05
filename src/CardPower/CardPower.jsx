import React from 'react';
import { getPowerBalance } from './CardPower.utils';
import { CardPowerBackground } from './CardPowerBackground.style';

const CardPower = props => {
  let { value, size } = props;

  return (
    <CardPowerBackground size={size} powerBalance={getPowerBalance(props)}>
      {value}
    </CardPowerBackground>
  );
};

export { CardPower };
