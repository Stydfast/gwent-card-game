import React from 'react';
import { getPowerBalance } from './CardPower.utils';
import { CardPowerBackground } from './CardPowerBackground.style';

const CardPower = props => {
  let { value, size, className } = props;

  return (
    <CardPowerBackground className={className} size={size} powerBalance={getPowerBalance(props)}>
      {value}
    </CardPowerBackground>
  );
};

export { CardPower };
