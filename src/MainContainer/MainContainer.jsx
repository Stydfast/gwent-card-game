import React from 'react';
import { Board } from '../Board';
import { CardPower } from '../CardPower';
import { CardType } from '../CardType';
import { CardEffect } from '../CardEffect';

const MainContainer = () => (
  <Board>
    <CardPower defaultValue="6" value="3" />
    <CardPower defaultValue="2" value="5" />
    <CardPower defaultValue="4" value="4" />
    <CardType type="type-melee" />
    <CardType type="type-ranged" />
    <CardType type="type-siege" />
    <CardType type="type-melee-ranged" />
    <CardEffect effect="effect-nurse" />
  </Board>
);

export { MainContainer };
