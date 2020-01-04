import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { CardEffect } from './CardEffect';

const options = {
  Agile: 'effect-agile',
  Clone: 'effect-clone',
  Improve: 'effect-improve',
  Muster: 'effect-muster',
  Nurse: 'effect-nurse',
  Scorch: 'effect-scorch',
  Spy: 'effect-spy',
  Warhorn: 'effect-warhorn',
};

storiesOf('Card', module).add('Card Effect', () => <CardEffect effect={select('Effect', options, 'effect-agile')} />);
