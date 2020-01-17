import React from 'react';
import { CardPowerHeroBackground, CardPowerHeroValue } from './CardPowerHeroBackground.style';

const CardPowerHero = props => {
  let { value, size, className } = props;

  return (
    <CardPowerHeroBackground className={className} size={size}>
      <CardPowerHeroValue size={size}>{value}</CardPowerHeroValue>
    </CardPowerHeroBackground>
  );
};

export { CardPowerHero };
