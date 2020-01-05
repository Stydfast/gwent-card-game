import React from 'react';
import { CardBackground, CardBuffs } from './Card.style';
import { CardPower } from '../CardPower';
import { CardPowerHero } from '../CardPowerHero';
import { CardEffect } from '../CardEffect';
import { CardType } from '../CardType';

const Card = ({ reference, defaultValue, value, effect, type, hero }) => (
  <CardBackground reference={reference}>
    {hero ? (
      <CardPowerHero defaultValue={defaultValue} value={value} />
    ) : (
      <CardPower defaultValue={defaultValue} value={value} />
    )}
    <CardBuffs>
      {effect ? <CardEffect effect={effect} /> : ''}
      <CardType type={type} />
    </CardBuffs>
  </CardBackground>
);

export { Card };
