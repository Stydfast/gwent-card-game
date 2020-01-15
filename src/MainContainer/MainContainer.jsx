import React from 'react';
import { Board } from '../Board';
import { Card } from '../Card';
import { Hand } from '../Hand';

const MainContainer = () => {
  const cards = [
    {
      reference: 'nor-dijkstra',
      effect: 'spy',
      type: 'melee',
      value: 4,
      hero: false,
    },
    {
      reference: 'neu-geralt',
      effect: null,
      type: 'melee',
      value: 15,
      hero: true,
    },
    {
      reference: 'neu-triss',
      effect: null,
      type: 'melee',
      value: 7,
      hero: true,
    },
    {
      reference: 'neu-yennefer',
      effect: 'nurse',
      type: 'ranged',
      value: 7,
      hero: true,
    },
    {
      reference: 'nil-fringilla',
      effect: null,
      type: 'ranged',
      value: 6,
      hero: false,
    },
    {
      reference: 'nor-catapult-1',
      effect: null,
      type: 'siege',
      value: 8,
      hero: false,
    },
    {
      reference: 'nor-siegfried',
      effect: null,
      type: 'melee',
      value: 5,
      hero: false,
    },
    {
      reference: 'neu-vesemir',
      effect: null,
      type: 'melee',
      value: 6,
      hero: true,
    },
  ];
  
  return (
  <Board>
    <Hand>
      { cards.map(({ reference, effect, type, value, hero }, index) => {
        return <Card key={index} reference={reference} effect={effect} type={type} value={value} hero={hero} />
      })}
    </Hand>
  </Board>
)};

export { MainContainer };
