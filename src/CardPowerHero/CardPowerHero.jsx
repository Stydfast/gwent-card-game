import React from 'react';
import { CardPowerHeroBackground, CardPowerHeroValue } from './CardPowerHeroBackground.style';

const CardPowerHero = props => {
  let { value } = props;

  return (
    <CardPowerHeroBackground>
      <CardPowerHeroValue>{value < 1 ? 1 : value}</CardPowerHeroValue>
    </CardPowerHeroBackground>
  );
};

export { CardPowerHero };
