import React from 'react';
import { Board } from '../Board';
import { CardPower } from '../CardPower';
import { CardType } from '../CardType';
import { CardEffect } from '../CardEffect';
import { CardPowerHero } from '../CardPowerHero';

const MainContainer = () => (
  <Board>
    <CardPower defaultValue={6} value={6} />
    <CardType type="type-siege" />
    <CardEffect effect="effect-nurse" />
    <CardPowerHero value={15} />
  </Board>
);

export { MainContainer };
