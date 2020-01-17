import React from 'react';
import { Board } from '../Board';
import { Card } from '../Card';
import { CardSelected } from '../CardSelected';
import { Hand } from '../Hand';

const MainContainer = () => {
  const cards = [
    {
      reference: 'nor-dijkstra',
      effect: 'spy',
      type: 'melee',
      value: 4,
      hero: false,
      faction: 'northern',
      name: 'Dijkstra',
      description: 'Blablablabla blabla blablabla'
    },
    {
      reference: 'neu-geralt',
      effect: null,
      type: 'melee',
      value: 15,
      hero: true,
      faction: null,
      name: 'Geralt de Riv',
      description: 'Blablablabla blabla blablabla'
    },
    {
      reference: 'neu-triss',
      effect: null,
      type: 'melee',
      value: 7,
      hero: true,
      faction: null,
      name: 'Triss Merigold',
      description: 'Blablablabla blabla blablabla'
    },
    {
      reference: 'neu-yennefer',
      effect: 'nurse',
      type: 'ranged',
      value: 7,
      hero: true,
      faction: null,
      name: 'Yennefer de Vengerberg',
      description: 'Blablablabla blabla blablabla'
    },
    {
      reference: 'nil-fringilla',
      effect: null,
      type: 'ranged',
      value: 6,
      hero: false,
      faction: 'nilfgaard',
      name: 'Fringilla',
      description: 'Blablablabla blabla blablabla'
    },
    {
      reference: 'nor-catapult-1',
      effect: null,
      type: 'siege',
      value: 8,
      hero: false,
      faction: 'northern',
      name: 'Catapulte',
      description: 'Blablablabla blabla blablabla'
    },
    {
      reference: 'nor-siegfried',
      effect: null,
      type: 'melee',
      value: 5,
      hero: false,
      faction: 'northern',
      name: 'Siegfried',
      description: 'Blablablabla blabla blablabla'
    },
    {
      reference: 'neu-vesemir',
      effect: null,
      type: 'melee',
      value: 6,
      hero: true,
      faction: null,
      name: 'Vesemir',
      description: 'Blablablabla blabla blablabla'
    },
  ];
  
  return (
  <Board>
    <CardSelected reference="nor-dijkstra" value="4" name="Geralt de Riv" description="blablablab blabla blabla" effect="spy" type="melee" faction="northern"/>
    <Hand>
      { cards.map(({ reference, effect, type, value, hero }, index) => {
        return <Card key={index} reference={reference} effect={effect} type={type} value={value} hero={hero} />
      })}
    </Hand>
  </Board>
)};

export { MainContainer };
