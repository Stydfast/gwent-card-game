import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, number } from '@storybook/addon-knobs';
import { Card } from './Card';

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
  Dirjksta: 'neu-dirjksta',
  Dandelion: 'neu-dandelion',
  Fringilla: 'nil-fringilla',
};

const optionsNumber = {
  range: true,
  min: 1,
  max: 50,
  step: 1,
};

storiesOf('Card', module).add('Card', () => (
  <Card
    defaultValue={number('Default value', 1, optionsNumber)}
    value={number('Value', 1, optionsNumber)}
    reference={select('Reference', optionsReference, 'neu-geralt')}
    effect={select('Effect', optionsEffect, undefined)}
    type={select('Type', optionsType, 'melee')}
    hero={boolean('Hero', false)}
  />
));
