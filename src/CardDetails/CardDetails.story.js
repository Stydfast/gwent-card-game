import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, number, text } from '@storybook/addon-knobs';
import { CardDetails } from './CardDetails';

const optionsEffect = {
  Agile: 'agile',
  Clone: 'clone',
  Improve: 'improve',
  Muster: 'muster',
  Nurse: 'nurse',
  Scorch: 'scorch',
  Spy: 'spy',
  Warhorn: 'warhorn',
  None: undefined,
};

const optionsType = {
  Melee: 'melee',
  Ranged: 'ranged',
  Siege: 'siege',
  MeleeRanged: 'melee-ranged',
};

const optionsReference = {
  Geralt: 'neu-geralt',
  Yennefer: 'neu-yennefer',
  Triss: 'neu-triss',
  Dirjksta: 'nor-dijkstra',
  Dandelion: 'neu-dandelion',
  Fringilla: 'nil-fringilla',
};

const optionsNumber = {
  range: true,
  min: 1,
  max: 50,
  step: 1,
};

const optionsFaction = {
  Northern: 'northern',
  Nilfgaard: 'nilfgaard',
  Monster: 'monster',
  Neutral: null,
};

storiesOf('CardDetails', module).add('CardDetails', () => (
  <CardDetails
    value={number('Value', 15, optionsNumber)}
    reference={select('Reference', optionsReference, 'neu-geralt')}
    name={text('Name', 'Geralt de Riv')}
    description={text('Description', 'Blablabla blabla blabla bla')}
    faction={select('Faction', optionsFaction, 'neutral')}
    effect={select('Effect', optionsEffect, undefined)}
    type={select('Type', optionsType, 'melee')}
    hero={boolean('Hero', true)}
  />
));
